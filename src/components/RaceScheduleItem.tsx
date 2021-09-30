import {RawRaceResult} from "../stores/races/types";
import {
    Col,
    Image,
    Row
} from "react-bootstrap";
import {Link} from "react-router-dom";
import _ from "lodash";
import React from "react";


function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const RaceScheduleItem = ({race}: {race: RawRaceResult}) =>
    <>
        <Row className={'mb-5'}>
            <Col md={6}>
                {
                    race.specification.raceZwiftID ?
                        <h4>  <a className={'link-secondary'}
                                            target={'_blank'}
                                            href={`https://www.zwift.com/events/view/${race.specification.raceZwiftID}?eventSecret=${race.specification.zwiftSecret}`}>Join event</a>
                            &nbsp;or&nbsp;
                            <a className={'link-secondary'}
                               target={'_blank'}
                               href={`https://zwiftpower.com/events.php?zid=${race.specification.raceZwiftID}`}>view at zwiftpower.com</a>
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
                        race.specification.description.map((d, i) => <p key={i}>{d}</p>) : null
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
                    race.specification.primeSpecification.kom.map((kom, index) => {
                        return <React.Fragment key={index}>
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
                        </React.Fragment>
                    })
                }
                {race.specification.primeSpecification.kom.length === 0 ? 'None' : null}
                <h4>Sprint Points</h4>
                {
                    race.specification.primeSpecification.sprint.map((sprint, index) => {
                        return <React.Fragment key={index}>
                            Sprint: {sprint.name} <br/>
                            Lap: {sprint.lap}<br/>
                            Points: {
                            _.range(10, 0, -1).map(p => p * sprint.factor).join(', ')
                        }<br/>
                            {
                                (sprint.bonus && sprint.bonus.length) ? <>Bonus
                                    Seconds: {sprint.bonus.join(', ')}<br/></> : null
                            }
                        </React.Fragment>
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
