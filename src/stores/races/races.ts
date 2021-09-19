import {race1} from "./raw/race1";

import {
    calculateGC,
    calculateGreenJersey,
    caluclatePolkaDotJersey
} from "./dataConversion";
import {
    RaceSeries,
    RawRaceResult
} from "./types";
import {race2} from "./raw/race2";

export const defaultFinishPoints = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

export const races = [
    {
        ...race1,
        finished: true,
        specification: {
            title: 'Race 1: Watopia Figure 8',
            finish: {
                primeCat: "SPRINT",
                points: defaultFinishPoints,
                factor: 1,
                bonus: [10, 6, 4]
            },
            primeSpecification: {
                sprint: [{
                    type: 'FAL',
                    name: 'Watopia Sprint Forward',
                    lap: 1,
                    factor: 1
                }],
                kom: [{
                    type: 'FAL',
                    name: 'Watopia KOM Forward',
                    lap: 1,
                    factor: 1,
                }],
            }
        }
    },
    {
        ...race2,
        finished: true,
        specification: {
            title: 'Race 2: Watopia Flat',
            finish: {
                primeCat: "SPRINT",
                points: defaultFinishPoints,
                factor: 1,
            },
            primeSpecification: {
                sprint: [{
                    name: 'Watopia Sprint Forward',
                    lap: 2,
                    type: 'FAL',
                    factor: 2,
                    bonus: [3, 2, 1]
                }],
                kom: [] as unknown[],
            }
        }
    },
    {
        finished: false,
        specification: {
            title: 'Race 3: Watopia Seaside Sprint',
            finish: {
                primeCat: "SPRINT",
                points: defaultFinishPoints,
                factor: 1,
            },
            primeSpecification: {
                sprint: [{
                    name: 'Watopia Sprint Forward',
                    lap: 1,
                    type: 'FAL',
                    factor: 1,
                },
                    {
                        name: 'Watopia Sprint Forward',
                        lap: 2,
                        type: 'FAL',
                        factor: 1,
                    },
                    {
                        name: 'Watopia Sprint Forward',
                        lap: 3,
                        type: 'FAL',
                        factor: 1,
                    }],
                kom: [] as unknown[],
            }
        }
    }
    //  race2 as RawRaceResult,
    //   race3 as RawRaceResult,

] as RawRaceResult[]

export const vcrtCupSeason1 = {
    totalRaces: 6,
    finishedRaces: races.filter(r => r.finished).length,
    races: races,
    name: 'VCRT Cup Season 1',
} as RaceSeries


export const gc = calculateGC(vcrtCupSeason1)
export const gcA = gc.filter(x => x.cat === 'A');
export const gcB = gc.filter(x => x.cat === 'B');
export const gcC = gc.filter(x => x.cat === 'C');
export const gcD = gc.filter(x => x.cat === 'D');

export const greenJersey = calculateGreenJersey(vcrtCupSeason1);
export const greenJerseyA = greenJersey.filter(x => x.cat === 'A');
export const greenJerseyB = greenJersey.filter(x => x.cat === 'B');
export const greenJerseyC = greenJersey.filter(x => x.cat === 'C');
export const greenJerseyD = greenJersey.filter(x => x.cat === 'D');

export const polkaDotJersey = caluclatePolkaDotJersey(vcrtCupSeason1);
export const polkaDotJerseyA = polkaDotJersey.filter(x => x.cat === 'A');
export const polkaDotJerseyB = polkaDotJersey.filter(x => x.cat === 'B');
export const polkaDotJerseyC = polkaDotJersey.filter(x => x.cat === 'C');
export const polkaDotJerseyD = polkaDotJersey.filter(x => x.cat === 'D');



