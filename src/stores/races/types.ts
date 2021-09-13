export type RawRaceResult = {
    data: RawRiderRaceResult[],
    catAfts: PrimeRawData,
    catBfts: PrimeRawData,
    catCfts: PrimeRawData,
    catDfts: PrimeRawData,
    catAfal: PrimeRawData,
    catBfal: PrimeRawData,
    catCfal: PrimeRawData,
    catDfal: PrimeRawData,
    specification: {
        title: string;
        finish: {
            primeCat: PrimeCat |'NONE'
            points: number[]
            factor: number
        }
        primeSpecification: {
            kom: PrimeSpecification[]
            sprint: PrimeSpecification[]
        }
    }

}

export type PrimeCat = 'SPRINT'|'KOM'
export type PrimeType = 'FAL'|'FTS'
export type PrimeSpecification = {
    name: string;
    lap: number;
    factor?: number;
    type: PrimeType
}

export type PrimeRawData = {
    data: {
        lap: number;
        name: string;
        rider_1?: RidePrimeRawData;
        rider_2?: RidePrimeRawData;
        rider_3?: RidePrimeRawData;
        rider_4?: RidePrimeRawData;
        rider_5?: RidePrimeRawData;
        rider_6?: RidePrimeRawData;
        rider_7?: RidePrimeRawData;
        rider_8?: RidePrimeRawData;
        rider_9?: RidePrimeRawData;
        rider_10?: RidePrimeRawData;
    }[]
};
export type RawRiderRaceResult = Record<string, unknown>
export type Cat = 'A' | 'B' | 'C' | 'D' | 'UNKNOWN'
export type RidePrimeRawData = {
    zwid: number
};

export interface RiderRaceResult {
    id: number;
    name: string;
    time: number;
    sprintPoints: number;
    komPoints: number;
    dq: string;
    cat: Cat;
    position_in_cat: number;
}

export interface RiderSeriesResult extends RiderRaceResult {
    totalRaces: number;
}

export type RaceSeries = {
    totalRaces: number;
    finishedRaces: number;
    races: RawRaceResult[],
}

export type PrimeRaceResult = Record<string, number>
export type PrimeResult = number[]
