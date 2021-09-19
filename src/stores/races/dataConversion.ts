import {
    Cat,
    PrimeCat,
    PrimeRawData,
    PrimeSpecification,
    PrimeType,
    RaceSeries,
    RawRaceResult,
    RawRiderRaceResult,
    RiderRaceResult,
    RiderSeriesResult
} from "./types";
import * as _ from 'lodash';


export const getRawRiderRaceResult = (data: RawRaceResult, rider: number) => {
    const result = data.data.filter(x => (x.zwid === rider));
    //console.log('getRawRiderRaceResult', result)
    if (result.length === 0) {
        return null;
    }
    return result[0]
}
export const formatRiderRaceResult = (data: RawRiderRaceResult) => {
    return {
        id: data.zwid,
        name: data.name,
        time: data.time_gun,
        gap: data.gap,
        sprintPoints: 0,
        komPoints: 0,
        dq: data.dq_cat,
        cat: data.category,
        position_in_cat: data.position_in_cat
    } as RiderRaceResult
}
export const joinRiderRaceResultsToRiderSeriesResult = (raceResults: RiderRaceResult[]) => {
    const seriesResult = raceResults.reduce((r1, r2) => {
        return {
            id: r1.id || r2.id,
            name: r1.name || r2.name,
            time: r1.time + r2.time,
            sprintPoints: r1.sprintPoints + r2.sprintPoints,
            komPoints: r1.komPoints + r2.komPoints,
            dq: r1.dq + r2.dq,
            cat: (r1.cat === null) ? r2.cat : (r1.cat === r2.cat ? r1.cat : 'UNKNOWN')
        }
    }, {
        time: 0,
        sprintPoints: 0,
        komPoints: 0,
        cat: null,
    } as RiderRaceResult)
    return {
        totalRaces: raceResults.length,
        ...seriesResult
    } as RiderSeriesResult
}

export const getRiders = (races: RawRaceResult[]) => {
    return _.uniq(races.flatMap(race => race.data).map(rawRiderResult => rawRiderResult.zwid)) as number[];
}
export const labelToCat: (label: string) => Cat = (label: string) => {
    switch (label) {
        case '1':
            return 'A';
        case '2':
            return 'B';
        case '3':
            return 'C';
        case '4':
            return 'D';
        default:
            return 'UNKNOWN'
    }
}

export const calculateSingleRaceResult = (race: RawRaceResult) =>
calculateLeaderBoard({races: [race], totalRaces: 1, finishedRaces: 1}, 'position_in_cat', 'asc', true);
export const calculateGC = (series: RaceSeries) =>
calculateLeaderBoard(series, 'time', 'asc', true);
export const calculateGreenJersey = (series: RaceSeries) =>
calculateLeaderBoard(series, 'sprintPoints', 'desc', false);
export const caluclatePolkaDotJersey = (series: RaceSeries) =>
calculateLeaderBoard(series, 'sprintPoints', 'desc', false);

export const calculateLeaderBoard = (series: RaceSeries, orderBy: keyof RiderSeriesResult, order: 'asc' | 'desc', onlyRidersWhCompletedAllRaces: boolean) => {
    const points = getPoints(series.races);
    const bonus =  getTimeBonus(series.races);
    const allFinishedRaces = series.races.filter(r => r.finished)

    let ridersSeriesResults: RiderSeriesResult[] = getRiders(allFinishedRaces)
        .map((rider: number) => {
            const riderRaces = allFinishedRaces
                    .map(race => getRawRiderRaceResult(race, rider))
                    .filter(Boolean)
                    .map(r => formatRiderRaceResult(r))
                /*.filter(x => x.dq === '')*/;
            console.log('riderRaces', riderRaces)
            const riderSeriesResult = joinRiderRaceResultsToRiderSeriesResult(riderRaces);
            riderSeriesResult.komPoints = points.kom[riderSeriesResult.id]
            riderSeriesResult.sprintPoints = points.sprint[riderSeriesResult.id]
            return riderSeriesResult as RiderSeriesResult;
        });
    console.log('series result', ridersSeriesResults);
    if(onlyRidersWhCompletedAllRaces){
        ridersSeriesResults =  ridersSeriesResults.filter(x => x.totalRaces === series.finishedRaces);
    }
    // apply bonus seconds
    for(let riderResult of ridersSeriesResults){
        const riderBonus = bonus[riderResult.id] || 0;
        riderResult.time = riderResult.time - riderBonus;
        riderResult.bonusSeconds = riderBonus;
    }

    return _.orderBy(
        ridersSeriesResults
        , orderBy, order) as RiderSeriesResult[];
}

export function sec2time(sec: number) {
    const prefix = sec < 0 ? '-': ''

    const timeInSeconds = sec < 0 ? -sec : sec;
    const pad = function (num: number, size: number) {
            return ('000' + num).slice(size * -1);
        },
        time = timeInSeconds, //parseFloat(timeInSeconds).toFixed(3),
        hours = Math.floor(time / 60 / 60),
        minutes = Math.floor(time / 60) % 60,
        seconds = Math.floor(time - minutes * 60),
        milliseconds = time % 1;

    return prefix + pad(hours, 2) + ':' + pad(minutes, 2) + ':' + pad(seconds, 2) + ',' + pad(milliseconds, 3);
}

export const getPoints = (races: RawRaceResult[]) => {
    const komPoints: Record<number, number> = {}  //Record<zwid, points>
    const sprintPoints: Record<number, number> = {}  //Record<zwid, points>
    const allFinishedRaces = races.filter(r => r.finished);
    const riders = getRiders(allFinishedRaces)
    riders.forEach(r => {
        komPoints[r] = 0;
        sprintPoints[r] = 0;
    })

    const primeHandler = (race: RawRaceResult, prime: PrimeSpecification, cat: Cat, primeCat: PrimeCat, dataMap: Record<number, number>) => {
        const primeData = getPrimeData(race, prime.type, primeCat, cat, prime.lap, prime.name)
        if(!primeData){
            return
        }

        for (let i = 0; (i < 10 && (i < primeData.length)); i++) {
            const rider = primeData[i];
            const points = (10 - i) * (prime.factor || 1)
            dataMap[rider] = dataMap[rider] + points;
        }
    }
    for (const race of allFinishedRaces) {
        for (const cat of ['A', 'B', 'C', 'D'] as Cat[]) {
            race.specification.primeSpecification.kom.forEach(prime => primeHandler(race, prime, cat, "KOM", komPoints))
            race.specification.primeSpecification.sprint.forEach(prime => primeHandler(race, prime, cat, "SPRINT", sprintPoints))

            //handle finish
            if(race.specification.finish.primeCat !== "NONE"){
                const finishResult = getFinalResultForCat(race, cat)
                for (let i = 0; (i < race.specification.finish.points.length && (i < finishResult.length)); i++) {
                    const rider = finishResult[i];
                    const points = race.specification.finish.points[i] * (race.specification.finish.factor || 1)
                    const dataMap = race.specification.finish.primeCat === "SPRINT" ? sprintPoints : komPoints
                    dataMap[rider] = dataMap[rider] + points;
                }
            }

        }

    }



        console.log('points', {
            kom: komPoints,
            sprint: sprintPoints
        })
    return {
        kom: komPoints,
        sprint: sprintPoints
    }


}

export const getTimeBonus = (races: RawRaceResult[]) => {
    const bonus: Record<number, number> = {}  //Record<zwid, points>
    const allFinishedRaces = races.filter(r => r.finished);
    const riders = getRiders(allFinishedRaces)
    riders.forEach(r => {
        bonus[r] = 0;
    })

    const bonusHandler = (race: RawRaceResult, prime: PrimeSpecification, cat: Cat, primeCat: PrimeCat, dataMap: Record<number, number>) => {
        const primeData = getPrimeData(race, prime.type, primeCat, cat, prime.lap, prime.name)
        if(!primeData || !prime.bonus || prime.bonus.length === 0){
            return
        }
        for (let i = 0; ((i < prime.bonus.length) && (i < primeData.length)); i++) {
            const rider = primeData[i];
            const bonusSeconds = prime.bonus[i]
            dataMap[rider] = dataMap[rider] + bonusSeconds;
        }
    }
    for (const race of allFinishedRaces) {
        for (const cat of ['A', 'B', 'C', 'D'] as Cat[]) {
            race.specification.primeSpecification.kom.forEach(prime => bonusHandler(race, prime, cat, "KOM", bonus))
            race.specification.primeSpecification.sprint.forEach(prime => bonusHandler(race, prime, cat, "SPRINT", bonus))

            //handle finish
            if(race.specification.finish.bonus ){
                const finishResult = getFinalResultForCat(race, cat)
                for (let i = 0; (i < race.specification.finish.bonus.length && (i < finishResult.length)); i++) {
                    const rider = finishResult[i];
                    const bonusSeconds = race.specification.finish.bonus[i]
                    bonus[rider] = bonus[rider] + bonusSeconds;
                }
            }
        }
    }

    return bonus;


}

function getFinalResultForCat(race: RawRaceResult, cat: Cat): number[] {
    return _.orderBy(race.data.filter(x => x.category === cat), 'position_in_cat')
        .map(x => x.zwid) as number[]
}

function getPrimeData(race: RawRaceResult, type: PrimeType, primeCat: PrimeCat, cat: Cat, lap: number, name: string) {
    const primeData: PrimeRawData = (race as any)[`cat${cat}${type.toLowerCase()}`];
    if (!primeData || !primeData.data) {
        return undefined;
    }
    const primeResultRawArray = primeData.data
        .filter(x => x.lap === lap)
        .filter(x => x.name.toLowerCase() === name.toLowerCase());
    if (primeResultRawArray.length !== 1) {
        console.error('expected to find one result', race.specification.title, type, primeCat, cat, lap, name, primeResultRawArray.length, `cat${cat}${type.toLowerCase()}`)
        return undefined;
    }
    const primeResultRaw = primeResultRawArray[0]
    return [
        primeResultRaw.rider_1?.zwid,
        primeResultRaw.rider_2?.zwid,
        primeResultRaw.rider_3?.zwid,
        primeResultRaw.rider_4?.zwid,
        primeResultRaw.rider_5?.zwid,
        primeResultRaw.rider_6?.zwid,
        primeResultRaw.rider_7?.zwid,
        primeResultRaw.rider_8?.zwid,
        primeResultRaw.rider_9?.zwid,
        primeResultRaw.rider_10?.zwid
    ].filter(Boolean)
}
