import React from 'react';
import './style/style.scss';
import {Container} from "react-bootstrap";
import {
    gcA,
    gcB,
    gcC,
    gcD
} from "./stores/races/races";
import {CatGCTable} from "./components/CatGCTable";

export default function App() {

    return <>
        <Container>
            <h1>VCRT Cup</h1>
            <CatGCTable title={'Cat A GC'} gc={gcA}/>
            <CatGCTable title={'Cat B GC'} gc={gcB}/>
            <CatGCTable title={'Cat C GC'} gc={gcC}/>
            <CatGCTable title={'Cat D GC'} gc={gcD}/>
        </Container>
    </>

}
