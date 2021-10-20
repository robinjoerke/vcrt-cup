import {race1} from "./raw/race1";
const bologna = require('../../../img/maps/bologna_tt.svg');
const outAndBack = require('../../../img/maps/watopia_out_and_back_again.svg');
const tireBouchon = require('../../../img/maps/france_tire_bouchon.svg');
const triple_loops = require('../../../img/maps/london_triple_loops.svg');
const wbr_climbing = require('../../../img/maps/watopia_wbr_climbing_series.svg');
const nyc_kom = require('../../../img/maps/new_york_nyc_kom_after_party.svg');

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
            title: 'Bologna Time Trial Lap',
            date: 'Oct 6th 19:30 CET',
            type: 'ITT – Prologue',
            description: [
                'Like all great stage-races, this season\'s VCRT Cup begins with a Prologue through the streets of Bologna. While the fans get to see their favourite riders depart one at a time in this ITT Prologue, the riders themselves will be only thinking about the final 2.1km, with the famous ',
                'Madonna di San Luca climb awaiting them. Who will cross the line in the fastest time and pull on that coveted VCRP Cup leader\'s Jersey?!',
                'Directeur Sportif Notes: There are no KOM points atop the climb and riders must race all out for the GC. There are also no Bonus seconds available on today\'s stage. Just each rider against the clock. The race of truth! '
            ],
            distance: '8km',
            elevation: '230m',
            routeLink: 'https://zwiftinsider.com/route/time-trial-lap/',
            raceZwiftID: '2306467',
            zwiftSecret: '688a35cb271cdb3dabe6',
            imageURL: bologna,
            finish: {
                primeCat: "NONE",
                points: [],
                factor: 1,
                //bonus: [10, 6, 4],
                // timeGapRule: 0,
            },
            primeSpecification: {
                sprint: [],
                kom: [],
            }
        }
    },
    {
        ...race2,
        finished: true,
        specification: {
            title: 'Watopia/Out And Back Again',
            date: 'Oct 13th 19:30 CET',
            type: 'Road Race',
            description: [
                'A fast start and early sprint points up for grabs in the first road stage of this year\'s VCRT Cup. Will the break be given any opportunity early on, or will the sprinters want to control things until the slopes of the Volcano loom large!?',
                'This stage has something for everyone and while the pure sprinters will be forming Le Gruppetto on the lower slopes of today\'s first climb the punchers will be fighting for the coveted first  Climbers Jersey of this year\'s VCRT Cup. The flat run into the line will surely be contested by a reduced bunch, but who will have the legs to finish off the day!',
                'Directeur Sportif Notes: Fuego Flats will offer the first Sprint points of this year\'s VCRT Cup before heading to the Watopia Sprint. Climbers will have their eyes on the Cat2 Volcano KOM before the Cat3 Watopia KOM Reverse rounds off this tough stage. Those sprinters left at the finish will be able to bag some big points for the Sprint competition.\n'
            ],
            distance: '42.2km',
            elevation: '303m',
            routeLink: 'https://zwiftinsider.com/route/out-and-back-again/',
            raceZwiftID: '2306471',
            zwiftSecret: '688a35cb271cdb3dabe6',
            imageURL: outAndBack,
            finish: {
                primeCat: "SPRINT",
                points: [30, 25, 22, 19, 17, 15, 13, 11, 9, 7, 6, 5, 4, 3, 2],
                factor: 1,
                timeGapRule: 3,
                bonus: [5, 3, 1]
            },
            primeSpecification: {
                sprint: [{
                    name: 'Fuego Sprint Forward',
                    lap: 1,
                    type: 'FAL',
                    factor: 2,
                },
                    {
                        name: 'Watopia Sprin',
                        lap: 1,
                        type: 'FAL',
                        factor: 2,
                    }],
                kom: [{
                    name: 'Volcano KOM',
                    lap: 1,
                    type: 'FAL',
                    factor: 1,
                }, {
                    name: 'Watopia KOM Reverse',
                    lap: 1,
                    type: 'FAL',
                    factor: 1,
                }],
            }
        }
    },
    {
        finished: false,
        specification: {
            title: 'France/Tire-Bouchon',
            date: 'Oct 20th 19:30 CET',
            type: 'Road Race',
            distance: '57.2km (A/B), 40.2km (C/D)',
            elevation: '431m (A/B), 431m (C/D)',
            routeLink: 'https://zwiftinsider.com/route/tire-bouchon/',
            raceZwiftID: '2306472',
            zwiftSecret: '688a35cb271cdb3dabe6',
            imageURL: tireBouchon,
            description: [
                'With A/B finishing at Marina Sprint and B/C at Ballon Sprint today is surely one for the Sprinters. However it won\'t be an easy day, as this stage begins with a bang and an unclassified climb straight out the neutral zone. From here the sprinters will have their chances but also have to be on-guard. Whilst the Cat 4 Aqueduct KOM wont trouble most, the Cat 2 Petit KOM, roughly halfway through today\'s stage, could spell trouble for the fast men and women. Will this climb see a break try their luck to go long for the finish and spoil the sprinters day?!',
                'Directeur Sportif Notes: Cat A/B finish at the Marina Sprint (approx 57.2km) B/C at Ballon Sprint (approx 40.2km) no-one climbs the petit KOM for a second time. So get those sprint-trains prepped!'
            ],
            finish: {
                primeCat: "SPRINT",
                points: [50, 30, 20, 18, 16, 14, 12, 10, 8, 7, 6, 5, 4, 3, 2],
                factor: 1,
                timeGapRule: 3,
                bonus: [5, 3, 1]
            },
            primeSpecification: {
                sprint: [{
                    name: 'Marina Sprint Reverse',
                    lap: 1,
                    type: 'FAL',
                    factor: 2,
                },
                    {
                        name: 'Pavé Sprint Reverse',
                        lap: 1,
                        type: 'FAL',
                        factor: 2,
                    },
                    {
                        name: 'Watopia Sprint Forward',
                        lap: 1,
                        type: 'FAL',
                        factor: 2,
                    },
                    {
                        name: 'Ballon Sprint',
                        lap: 1,
                        type: 'FAL',
                        factor: 2,
                        note: '(A/B only)'
                    },
                    {
                        name: 'Pavé Sprint',
                        lap: 1,
                        type: 'FAL',
                        factor: 2,
                        note: '(A/B only)'
                    }],
                kom: [{
                    name: 'Aqueduct KOM Reverse',
                    lap: 1,
                    type: 'FAL',
                    factor: 1,
                },
                    {
                        name: 'Petit KOM',
                        lap: 1,
                        type: 'FAL',
                        factor: 2,
                    }],
            }
        }
    },
    {
        finished: false,
        specification: {
            title: 'London/Triple Loops',
            date: 'Oct 27th 19:30 CET',
            type: 'Road Race',
            description: [
                'Surely one for the break today with only a handful of points available for both Sprint and KOM Jersey classifications. Will the peloton have the desire to chase the early move? Those looking to climb the GC rankings may try their luck in the escape or perhaps bide their time until the slopes of the Cat 2 Leith Hill come into play. A hilly finish then sees the unclassified Keith Hill have the final say before the fast finish into London.',
                'Directeur Sportif Notes: Whatever the tactics today, note that Keith Hill is an unclassified climb on today\'s course and will not feature in the KOM Points competition. The steep slopes of the escalators inside the final 4km should be on everyone\'s radar!\n'
            ],
            distance: '41.3km',
            elevation: '544m',
            routeLink: 'https://zwiftinsider.com/route/triple-loops/',
            raceZwiftID: '2306474',
            zwiftSecret: '688a35cb271cdb3dabe6',
            imageURL: triple_loops,
            finish: {
                primeCat: "SPRINT",
                points: [30, 25, 22, 19, 17, 15, 13, 11, 9, 7, 6, 5, 4, 3, 2],
                factor: 1,
                timeGapRule: 3,
                bonus: [5, 3, 1],
            },
            primeSpecification: {
                sprint: [{
                    name: 'The Mall Sprint',
                    lap: 1,
                    type: 'FAL',
                    factor: 2,
                }],
                kom: [{
                    name: 'Leith Hill',
                    lap: 1,
                    type: 'FAL',
                    factor: 2,
                }],
            }
        }
    },
    {
        finished: false,
        specification: {
            title: 'Watopia/WBR Climbing Series',
            date: ' Nov 3rd 19:30 CET',
            type: 'Road Race',
            distance: '43.8km',
            description: [
                'The Gendarmerie of Watopia will have their work cut out today controlling the crowds! The Queen Stage of this year\'s VCRT Cup sees the peloton ascend the Epic KOM not once, but twice! Surely a day for the pure climbers, fireworks are guaranteed as well as a massive shake up in the overall GC battle. Huge crowds are expected to gather to see those near the-top-of-the-tree do battle. Those looking to steal the KOM Jersey may have their sights set on an early attack, as the route aims straight for the feared Radio Mast. Will today\'s course worry the GC men and women enough to try and stick with the out and out climbers on the first climb of the day? Or will their powder be kept dry to blow things apart on the second ascent of the Epic KOM? One thing is for sure, we’ll see a shakeup in the General Classification before today is through!',
                'Directeur Sportif Notes: Second ascent of the Epic KOM and Finish Line ends at Epic KOM banner, not the Radio Mast (you’ll be happy to hear.) Also note that only the Watopia Sprint features in today\'s Sprint competition down in the valley.'
            ],
            elevation: '1117m',
            routeLink: 'https://zwiftinsider.com/route/wbr-climbing-series/',
            raceZwiftID: '2306475',
            zwiftSecret: '688a35cb271cdb3dabe6',
            imageURL: wbr_climbing,
            finish: {
                primeCat: "KOM",
                points: [20, 15, 12, 10, 8, 4, 2],
                factor: 1,
                timeGapRule: 1,
                bonus: [5, 3, 1],
            },
            primeSpecification: {
                sprint: [{
                    name: 'Watopia Sprint Forward',
                    lap: 1,
                    type: 'FAL',
                    factor: 2,
                }],
                kom: [{
                    name: 'Epic KOM',
                    lap: 1,
                    type: 'FAL',
                    factor: 2,
                }],
            }
        }
    },
    {
        finished: false,
        specification: {
            title: ' New York/NYC KOM After Party',
            date: ' Nov 10th 19:30 CET',
            type: 'Road Race',
            distance: '37.4km',
            description: [
                'Where better to finish off this year\'s VCRT Cup than on the streets of NYC?! On paper, another day for the sprinters, but with rolling twisting roads through Central Park, perhaps those looking for a few extra seconds in the GC can provide a spectacle and upset the party! There will be little champagne drank on today\'s final stage as the peloton heads full speed to finish atop the Forward KOM, at the banner! A Puncher could use this short sharp climb to produce something special and if things are close in the GC, who knows...',
                'Directeur Sportif Notes: This route consists of 3x Laps of Gotham Grind Reverse before heading to finish at the banner of the Forward KOM. The ‘Central Park Loop’ banner does not feature in the Sprint competition. Only the ‘NY Sprint’'
            ],
            elevation: '440m',
            routeLink: 'https://zwiftinsider.com/route/nyc-kom-after-party/',
            raceZwiftID: '2306476',
            zwiftSecret: '688a35cb271cdb3dabe6',
            imageURL: nyc_kom,
            finish: {
                primeCat: "KOM",
                points: [5, 3, 2, 1],
                factor: 1,
                timeGapRule: 1,
                bonus: [5, 3, 1],
            },
            primeSpecification: {
                sprint: [{
                    name: 'NY Sprint',
                    lap: 1,
                    type: 'FAL',
                    factor: 2,
                },
                    {
                        name: 'NY Sprint',
                        lap: 2,
                        type: 'FAL',
                        factor: 2,
                    },
                    {
                        name: 'NY Sprint',
                        lap: 3,
                        type: 'FAL',
                        factor: 2,
                    }],
                kom: [{
                    name: 'Epic KOM',
                    lap: 1,
                    type: 'FAL',
                    factor: 2,
                }],
            }
        }
    }

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



