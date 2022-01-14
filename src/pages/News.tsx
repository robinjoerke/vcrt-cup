import React from "react";
import {Navigation} from "../components/Navbar";
import {Container} from "react-bootstrap";
import {Subscribe} from "../components/news/Subscribe";
import {WithClonedStyles} from "../components/news/WithClonedStyles";
import {races} from "../stores/races/races";

const nextRace = races.filter(r => !r.finished).shift();


export const News = () => <>        <Navigation/>
    <Container>
        <h2 className={'my-3'}>News</h2>
        <WithClonedStyles title={'news'} styleSelector={'link'}/>
        <Subscribe styleSelector={'link'} title={'Subscribe'} />
    </Container></>;
