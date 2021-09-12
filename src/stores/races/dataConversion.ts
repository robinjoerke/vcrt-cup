import {
    Cat,
    RaceSeries,
    RawRaceResult,
    RawRiderRaceResult,
    RiderRaceResult,
    RiderSeriesResult
} from "./types";
import * as _ from 'lodash';



export const  getRawRiderRaceResult = (data: RawRaceResult, rider: number) => {
    const result = data.data.filter(x => (x.zwid === rider));
    //console.log('getRawRiderRaceResult', result)
    if (result.length === 0){
        return null;
    }
    return result[0]
}
export const  formatRiderRaceResult = (data: RawRiderRaceResult) => {
    return {
        id: data.zwid,
        name: data.name,
        time: data.time_gun,
        sprintPoints: 0,
        komPoints: 0,
        dq: data.dq_cat,
        cat: data.category//labelToCat(data.label as string),
    } as RiderRaceResult
}
export const  joinRiderRaceResultsToRiderSeriesResult = (raceResults: RiderRaceResult[]) => {
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
    },{
        time: 0,
        sprintPoints: 0,
        komPoints: 0,
        cat: null,
    } as RiderRaceResult )
    return    {
        totalRaces: raceResults.length,
        ...seriesResult
    } as RiderSeriesResult
}

export const getRiders = (races: RawRaceResult[]) => {
    return _.uniq(races.flatMap(race => race.data).map(rawRiderResult => rawRiderResult.zwid));
}
export const labelToCat: (label: string) => Cat = (label: string) =>  {
    switch (label){
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

export const calculateGC = (series: RaceSeries) => {
    const allFinishedRaces = series.races

    const ridersSeriesResults: RiderSeriesResult[] = getRiders(allFinishedRaces)
        .map((rider: number) => {
            const riderRaces = allFinishedRaces
                .map(race => getRawRiderRaceResult(race, rider))
                .filter(Boolean)
                .map(r => formatRiderRaceResult(r))
                /*.filter(x => x.dq === '')*/;
            console.log('riderRaces' ,riderRaces)
            const riderSeriesResult = joinRiderRaceResultsToRiderSeriesResult(riderRaces);
            return riderSeriesResult as RiderSeriesResult;
        });
    console.log('series result', ridersSeriesResults);
    return _.orderBy(
        ridersSeriesResults.filter( x => x.totalRaces === series.finishedRaces)
        , 'time') as RiderSeriesResult[];

}

export function sec2time(timeInSeconds: number) {
    const pad = function(num:number, size:number) { return ('000' + num).slice(size * -1); },
        time = timeInSeconds, //parseFloat(timeInSeconds).toFixed(3),
        hours = Math.floor(time / 60 / 60),
        minutes = Math.floor(time / 60) % 60,
        seconds = Math.floor(time - minutes * 60),
        milliseconds = time % 1;

    return pad(hours, 2) + ':' + pad(minutes, 2) + ':' + pad(seconds, 2) + ',' + pad(milliseconds, 3);
}
