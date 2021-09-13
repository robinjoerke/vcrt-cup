import React from 'react';
import './style/style.scss';
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
} from "./stores/races/races";
import {CatGCTable} from "./components/CatGCTable";
import {Navigation} from "./components/Navbar";
import {About} from "./components/About";
import {Cat} from "./stores/races/types";
import {RaceResultTable} from "./components/RaceResultTable";
import {
    calculateGC,
    calculateSingleRaceResult
} from "./stores/races/dataConversion";
import {CatGreenJerseyTable} from "./components/CatGreenJerseyTable";
import {CatPolkaDotJerseyTable} from "./components/CatPolkaDotJerseyTable";

export default function App() {

    return <>
        <Navigation/>
        <Container>
            <About/>
            <h3 id={'cup'}>VCRT Cup</h3>
            <CatGCTable id={'cup-results-a'} title={'Cat A GC'} gc={gcA}/>
            <CatGCTable id={'cup-results-b'} title={'Cat B GC'} gc={gcB}/>
            <CatGCTable id={'cup-results-c'} title={'Cat C GC'} gc={gcC}/>
            <CatGCTable id={'cup-results-d'} title={'Cat D GC'} gc={gcD}/>
            <CatGreenJerseyTable title={'Cat A Sprint Ranking'} gc={greenJerseyA} />
            <CatGreenJerseyTable title={'Cat B Sprint Ranking'} gc={greenJerseyB} />
            <CatGreenJerseyTable title={'Cat C Sprint Ranking'} gc={greenJerseyC} />
            <CatGreenJerseyTable title={'Cat D Sprint Ranking'} gc={greenJerseyD} />
            <CatPolkaDotJerseyTable title={'Cat A KOM Ranking'} gc={polkaDotJerseyA} />
            <CatPolkaDotJerseyTable title={'Cat B KOM Ranking'} gc={polkaDotJerseyB} />
            <CatPolkaDotJerseyTable title={'Cat C KOM Ranking'} gc={polkaDotJerseyC} />
            <CatPolkaDotJerseyTable title={'Cat D KOM Ranking'} gc={polkaDotJerseyD} />
            <h3 id={'cup-by-race'}>VCRT Cup Races</h3>
            {
                vcrtCupSeason1.races.map(race =>
                <>
                    <h4>{race.specification.title}</h4>
                    <RaceResultTable title={`Cat A`} cat={'A'} raceResult={calculateSingleRaceResult(race)} />
                    <RaceResultTable title={`Cat B`} cat={'B'} raceResult={calculateGC({totalRaces: 1, finishedRaces: 1, races: [race]})} />
                    <RaceResultTable title={`Cat C`} cat={'C'} raceResult={calculateGC({totalRaces: 1, finishedRaces: 1, races: [race]})} />
                    <RaceResultTable title={`Cat D`} cat={'D'} raceResult={calculateGC({totalRaces: 1, finishedRaces: 1, races: [race]})} />
                </>)
            }
        </Container>
    </>

}
