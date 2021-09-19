import React from 'react';
import {Container} from "react-bootstrap";
import {
    gcA,
    gcB,
    gcC,
    gcD,
    greenJerseyA,
    greenJerseyB,
    greenJerseyC,
    greenJerseyD,
    polkaDotJerseyA,
    polkaDotJerseyB,
    polkaDotJerseyC,
    polkaDotJerseyD,
    vcrtCupSeason1
} from "../stores/races/races";
import {CatGCTable} from "../components/CatGCTable";
import {Navigation} from "../components/Navbar";
import {About} from "../components/About";
import {Cat} from "../stores/races/types";
import {RaceResultTable} from "../components/RaceResultTable";
import {
    calculateGC,
    calculateSingleRaceResult
} from "../stores/races/dataConversion";
import {CatGreenJerseyTable} from "../components/CatGreenJerseyTable";
import {CatPolkaDotJerseyTable} from "../components/CatPolkaDotJerseyTable";

export const ResultsA = () => {
    return <>
        <Navigation/>
        <Container>
            <h2>Cat A Result</h2>
            <CatGCTable id={'cup-results-a'} title={'Cat A GC'} gc={gcA}/>
            <CatGreenJerseyTable title={'Cat A Sprint Ranking'} gc={greenJerseyA} />
            <CatPolkaDotJerseyTable title={'Cat A KOM Ranking'} gc={polkaDotJerseyA} />
            <h3 id={'cup-by-race'}>VCRT Cup Races</h3>
            {
                vcrtCupSeason1.races.filter(r => r.finished).map(race =>
                    <>
                        <h4>{race.specification.title}</h4>
                        <RaceResultTable title={`Cat A`} cat={'A'} raceResult={calculateSingleRaceResult(race)} />
                    </>)
            }
        </Container>
    </>
}
export const ResultsB = () => {
    return <>
        <Navigation/>
        <Container>
            <h2>Cat B Result</h2>
            <CatGCTable id={'cup-results-b'} title={'Cat B GC'} gc={gcB}/>
            <CatGreenJerseyTable title={'Cat B Sprint Ranking'} gc={greenJerseyB} />
            <CatPolkaDotJerseyTable title={'Cat B KOM Ranking'} gc={polkaDotJerseyB} />
            <h3 id={'cup-by-race'}>VCRT Cup Races</h3>
            {
                vcrtCupSeason1.races.filter(r => r.finished).map(race =>
                    <>
                        <h4>{race.specification.title}</h4>
                        <RaceResultTable title={`Cat B`} cat={'B'} raceResult={calculateSingleRaceResult(race)} />
                    </>)
            }
        </Container>
    </>
}
export const ResultsC = () => {
    return <>
        <Navigation/>
        <Container>
            <h2>Cat C Result</h2>
            <CatGCTable id={'cup-results-c'} title={'Cat C GC'} gc={gcC}/>
            <CatGreenJerseyTable title={'Cat C Sprint Ranking'} gc={greenJerseyC} />
            <CatPolkaDotJerseyTable title={'Cat C KOM Ranking'} gc={polkaDotJerseyC} />
            <h3 id={'cup-by-race'}>VCRT Cup Races</h3>
            {
                vcrtCupSeason1.races.filter(r => r.finished).map(race =>
                    <>
                        <h4>{race.specification.title}</h4>
                        <RaceResultTable title={`Cat C`} cat={'C'} raceResult={calculateSingleRaceResult(race)} />
                    </>)
            }
        </Container>
    </>
}
export const ResultsD = () => {
    return <>
        <Navigation/>
        <Container>
            <h2>Cat D Result</h2>
            <CatGCTable id={'cup-results-d'} title={'Cat D GC'} gc={gcD}/>
            <CatGreenJerseyTable title={'Cat D Sprint Ranking'} gc={greenJerseyD} />
            <CatPolkaDotJerseyTable title={'Cat D KOM Ranking'} gc={polkaDotJerseyD} />
            <h3 id={'cup-by-race'}>VCRT Cup Races</h3>
            {
                vcrtCupSeason1.races.filter(r => r.finished).map(race =>
                    <>
                        <h4>{race.specification.title}</h4>
                        <RaceResultTable title={`Cat D`} cat={'D'} raceResult={calculateSingleRaceResult(race)} />
                    </>)
            }
        </Container>
    </>
}


