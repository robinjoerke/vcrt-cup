import {races} from "./races";

export type RawRaceResult = {
    data: RawRiderRaceResult[]
}
export type RawRiderRaceResult = Record<string, unknown>
export type Cat = 'A' | 'B' | 'C' | 'D' | 'UNKNOWN'
export interface RiderRaceResult {
    id: number;
    name: string;
    time: number;
    sprintPoints: number;
    komPoints: number;
    dq: string;
    cat: Cat;
}
export interface RiderSeriesResult extends RiderRaceResult {
    totalRaces: number;
}
export type RaceSeries =  {
    totalRaces: number;
        finishedRaces: number;
        races: RawRaceResult[],
}
