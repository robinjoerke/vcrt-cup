import React from "react";
import {Navigation} from "../components/Navbar";
import {
    Accordion,
    Col,
    Container,
    Image,
    Row
} from "react-bootstrap";
import {vcrtCupSeason1} from "../stores/races/races";
import _ from "lodash";
import {Link} from "react-router-dom";
import {RaceScheduleItem} from "../components/RaceScheduleItem";


export const Schedule = () => <>
        <Navigation/>
        <Container>
            <h2 className={'mt-3'}>Schedule</h2>
            <Accordion>
            {
            vcrtCupSeason1.races.map((race, index) => {
                return <Accordion.Item eventKey={`${index}`} key={index}>
                    <Accordion.Header>{race.specification.date}: {race.specification.type} - {race.specification.title}{race.finished ? ' (finished)' : ''}</Accordion.Header>
                    <Accordion.Body>
                    <RaceScheduleItem race={race} />
                    </Accordion.Body>
                </Accordion.Item>
            })
        }
            </Accordion>
        </Container>
    </>
;
