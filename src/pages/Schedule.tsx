import React from "react";
import {Navigation} from "../components/Navbar";
import {Container} from "react-bootstrap";
import {vcrtCupSeason1} from "../stores/races/races";
import _ from "lodash";

export const Schedule = () => <>
    <Navigation/>
    <Container>
        <h2>Schedule</h2>{
        vcrtCupSeason1.races.map(race => {


            return <>
                <h3>{race.specification.title}</h3>
                <h4>{race.specification.finish.primeCat.toString()} Points at Finish: </h4>

                {race.specification.finish.points.map(p => p * (race.specification.finish.factor || 1)).join(', ')}
                {
                    (race.specification.finish.bonus && race.specification.finish.bonus.length) ? <>with Bonus Seconds: {race.specification.finish.bonus.join(', ')}<br/></> : null
                }
                <h4>KOM Points</h4>
                {
                    race.specification.primeSpecification.kom.map(kom => {
                        return <>
                            Kom: {kom.name} <br/>
                            Lap: {kom.lap}<br/>
                            Points: {
                                _.range(10,0, -1).map( p => p* kom.factor).join(', ')
                                }<br/>
                            {
                                (kom.bonus && kom.bonus.length) ? <>Bonus Seconds: {kom.bonus.join(', ')}<br/></> : null
                            }
                        </>
                    })
                }
                <h4>Sprint Points</h4>
                {
                    race.specification.primeSpecification.sprint.map(sprint => {
                        return <>
                            Sprint: {sprint.name} <br/>
                            Lap: {sprint.lap}<br/>
                            Points: {
                            _.range(10,0, -1).map( p => p* sprint.factor).join(', ')
                        }<br/>
                            {
                                (sprint.bonus && sprint.bonus.length) ? <>Bonus Seconds: {sprint.bonus.join(', ')}<br/></> : null
                            }
                        </>
                    })
                }

            </>
        })
    }
    </Container>
</>;
