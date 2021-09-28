import React from "react";
import {Navigation} from "../components/Navbar";
import {
    Col,
    Container,
    Image,
    Row
} from "react-bootstrap";
import {vcrtCupSeason1} from "../stores/races/races";
import _ from "lodash";
import {Link} from "react-router-dom";

function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const Schedule = () => <>
        <Navigation/>
        <Container>
            <h2 className={'mt-3'}>Schedule</h2>{
            vcrtCupSeason1.races.map(race => {
                return <>
                    <h3 className={'mt-4'}>{race.specification.date}: {race.specification.type} - {race.specification.title}{race.finished ? ' (finished)' : ''}</h3>
                    <Row className={'mb-5'}>
                        <Col md={6}>
                            {
                                race.specification.raceZwiftID ?
                                    <h4> Join event: <a className={'link-secondary'}
                                                        target={'_blank'}
                                                        href={`https://www.zwift.com/events/view/${race.specification.raceZwiftID}?eventSecret=${race.specification.zwiftSecret}`}>zwift.com</a>
                                        &nbsp;or view at&nbsp;
                                        <a className={'link-secondary'}
                                           target={'_blank'}
                                           href={`https://zwiftpower.com/events.php?zid=${race.specification.raceZwiftID}`}>zwiftpower.com</a>
                                    </h4> : null
                            }
                            {
                                race.specification.date ?
                                    <p>Date: {race.specification.date}</p> : null
                            }
                            {
                                race.specification.distance ?
                                    <p>Distance: {race.specification.distance}</p> : null
                            }
                            {
                                race.specification.elevation ?
                                    <p>Elevation: {race.specification.elevation}</p> : null
                            }
                            {
                                race.specification.description ?
                                    race.specification.description.map(d => <p>{d}</p>) : null
                            }
                            {
                                race.specification.routeLink ?
                                    <p> Route details: <Link className={'link-secondary'}
                                                             to={race.specification.routeLink}>{race.specification.routeLink}</Link>
                                    </p> : null

                            }
                            <h4>Scoring</h4>
                            <h5>{race.specification.finish.primeCat === 'NONE' ? 'No Points at Finish.' :
                                <>{capitalizeFirstLetter(race.specification.finish.primeCat.toString().toLowerCase())} Points
                                    at
                                    Finish:</>} </h5>

                            {race.specification.finish.points.map(p => p * (race.specification.finish.factor || 1)).join(', ')}
                            {
                                (race.specification.finish.bonus && race.specification.finish.bonus.length) ? <> <br/>with
                                    Bonus
                                    Seconds: {race.specification.finish.bonus.join(', ')}<br/></> : null
                            }
                            {race.specification.finish.timeGapRule ?
                                `GC: new time after ${race.specification.finish.timeGapRule} second gap`
                                : `GC: exact time`}
                            <h5>KOM Points</h5>
                            {
                                race.specification.primeSpecification.kom.map(kom => {
                                    return <>
                                        Kom: {kom.name} <br/>
                                        Lap: {kom.lap}<br/>
                                        Points: {
                                        _.range(10, 0, -1).map(p => p * kom.factor).join(', ')
                                    }<br/>
                                        {
                                            (kom.bonus && kom.bonus.length) ? <>Bonus
                                                Seconds: {kom.bonus.join(', ')}<br/></> : null
                                        }
                                        {kom.note ? <>{kom.note}<br/></> : null}
                                    </>
                                })
                            }
                            {race.specification.primeSpecification.kom.length === 0 ? 'None' : null}
                            <h4>Sprint Points</h4>
                            {
                                race.specification.primeSpecification.sprint.map(sprint => {
                                    return <>
                                        Sprint: {sprint.name} <br/>
                                        Lap: {sprint.lap}<br/>
                                        Points: {
                                        _.range(10, 0, -1).map(p => p * sprint.factor).join(', ')
                                    }<br/>
                                        {
                                            (sprint.bonus && sprint.bonus.length) ? <>Bonus
                                                Seconds: {sprint.bonus.join(', ')}<br/></> : null
                                        }
                                    </>
                                })
                            }
                            {race.specification.primeSpecification.sprint.length === 0 ? 'None' : null}
                        </Col>
                        <Col md={6}>
                            {
                                race.specification.imageURL ? <Image src={race.specification.imageURL} fluid/> : null

                            }
                        </Col>
                    </Row>

                </>
            })
        }
        </Container>
    </>
;
