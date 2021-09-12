import {race1} from "./raw/race1";

import {
    calculateGC,
    formatRiderRaceResult,
    getRawRiderRaceResult,
    getRiders,
    joinRiderRaceResultsToRiderSeriesResult
} from "./dataConversion";
import {
    RaceSeries,
    RawRaceResult,
    RiderRaceResult,
    RiderSeriesResult
} from "./types";
import {race2} from "./raw/race2";
import {race3} from "./raw/race3";

export const races = [
    race1 as RawRaceResult,
    race2 as RawRaceResult,
 //   race3 as RawRaceResult,

]

export const vcrtCupSeason1 = {
    totalRaces: 6,
    finishedRaces: races.length,
    races: races,
    name: 'VCRT Cup Season 1',
} as RaceSeries


export const gc = calculateGC(vcrtCupSeason1)
export const gcA = gc.filter(x => x.cat === 'A');
export const gcB = gc.filter(x => x.cat === 'B');
export const gcC = gc.filter(x => x.cat === 'C');
export const gcD = gc.filter(x => x.cat === 'D');

export function writeToWindow() {
    // @ts-ignore
    window['gc'] = gc;
    // @ts-ignore
    window['riders'] = getRiders(races);
}
