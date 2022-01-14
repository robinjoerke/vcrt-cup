import React from "react";
import {Link} from "react-router-dom";
import {Navigation} from "../components/Navbar";
import {Container} from "react-bootstrap";
import {WithClonedStyles} from "../components/news/WithClonedStyles";
import {races} from "../stores/races/races";
import {RaceScheduleItem} from "../components/RaceScheduleItem";

const nextRace = races.filter(r => !r.finished).shift();


export const Landing = () => <>        <Navigation/>
    <Container>
        <p>Vicious Cycle Race Team (VCRT) is an established e-racing team, formed to bring together like minded Zwift
            racers. We enjoy e-racing and love to win, but we also use it as a tool to boost our real-world performance
            whilst having fun. We take pride in honest racing and take transparency seriously. </p>

        <p>We are pleased to bring you the VCRT Cup series. The series runs for 6 weeks over 6 Stages each Wednesday at
            1730 UTC (Oct 6th - Nov 10th). The total time of the 6 individual races will count towards a General
            Classification. Furthermore there are KOM and Sprint points in almost all races to try and score the KOM or
            Sprint Jersey!</p>
        <p>Details  can be found on  <Link className={'link-secondary'} to="/schedule">VCRT Cup
            Schedule</Link> page and <Link className={'link-secondary'} to="/rules">Rules</Link> page.</p>

        {
            nextRace ? <>
                <h3 className={'mt-4'}>Next VCRT Cup Race: {nextRace.specification.date}: {nextRace.specification.type} - {nextRace.specification.title}
                </h3>
                <RaceScheduleItem race={nextRace}/>
            </> : null
        }


        <p>To join VCRT visit: <a className={'link-secondary'}
                                  href={'zwiftpower.com/team.php?id=5032'}>zwiftpower.com/team.php?id=5032</a></p>
    </Container></>;
