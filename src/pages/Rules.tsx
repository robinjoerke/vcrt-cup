import {Navigation} from "../components/Navbar";
import React from "react";
import {Container} from "react-bootstrap";



export const Rules = () => <>        <Navigation/>
    <Container>
        <h3>VCRT Cup Rules</h3>
        <h5>INDIVIDUAL STAGES CLASSIFICATION</h5>
        <p>
            Only able to race once or twice? Not a problem! Each race will run as its own individual stage. FAL takes
            all the glory on the day! Although you may still score points in the KOM or Sprints Jersey competition you
            can take each stage on an individual basis. If you can't commit to the entire series then simply try and
            beat all the others in the race/races you can attend!
        </p>


        <h5>GENERAL CLASSIFICATION </h5>
        <p>
            The overall series standings will be totalled for each mixed-race category (A,B,C,D). The individual time
            per event will be totalled towards a General Classification Competition, as per real life stage races. It is
            important to note that like in the real stage races a time gap rule will be applicable. This means that a
            gap of over 1 / 3 seconds has to occur between one rider and another rider to define a new group time stamp (1
            second for climbing stages, 3 for sprint finishes, no such rule for TTT, details on each race), . This
            could prove important in bunch sprint stages! If within two seconds of the rider in front, the individual(s)
            is given the same time as the first rider of the group. NOTE: Time gaps are given from the FIRST rider in a
            group to the FIRST rider of the next group. ALSO Note: This does not affect the time bonus available on some
            Stage finishes for the TOP 3 finishers (FAL)
        </p>
        <h5>KOM JERSEY CLASSIFICATION </h5>
        <p>
            Points will be awarded for the “First Across the Line (FAL)” on a number of key climbs throughout the
            series. Please see specific details for each race and climb below. Like real stage races, the major climbs
            have been categorized on a 1-4 scale where the bigger climbs are worth more points! Series standings will be
            totalled after each stage and for each mixed-race category.
        </p>
        <h5>SPRINT JERSEY CLASSIFICATION </h5>
        <p>
            Climbing not your thing? Then go for the Points Jersey! Sprint points will be awarded for the “FAL” at a
            number of sprint locations throughout the series. See below for specific details for each stage. Series
            standings will be totalled after each stage and for each mixed-race category.
        </p>
        <h5>RACE CATEGORIES </h5>
        <p>
            All racers must race in an appropriate WKG category, as calculated by Zwift Power. Racers may choose to race
            in a higher category if desired (i.e., a B racer may not enter the C race, but a B racer may enter the A
            race). If you are new to Zwift racing and unsure of what category to enter, your FTP is a good starting
            point. WKG categories for this series are as follows (Female riders should race based on their mixed
            category):
        </p>
        <p>
            Mixed Gender WKG Categories<br/>
            A: 4.0 + WKG and 250w FTP<br/>
            B: 3.2 – 3.99 WKG and 200w FTP<br/>
            C: 2.5 – 3.19 WKG and 150w FTP<br/>
            D: 1 – 2.49 WKG
        </p>
        <p>If a racer’s WKG category is upgraded by Zwift Power mid-series, they must race in the upgraded WKG category
            for the remainder of the series. If this happens, series points will not transfer. Any rider who exceeds
            category limits in a race will also be disqualified on Zwift Power and receive no points for that race. VCRT
            recommends that riders race up a category if they think a mid-series upgrade is possible. We are also aware
            that some racers may have newly created Zwift Power accounts or have no currently defined category, in this
            instance we recommend racers to complete at least one max effort Zwift race (longer than 20 min) before
            entering the series. Please note, we are unable to transfer time and points across a different race cat due
            to differences in race distances and total points avaialable. </p>
        <p>For more information on how Zwift Power determines WKG categories, check out this link: <a
            href={'https://www.zwiftpower.com/viewtopic.php?f=11&t=8686'} target={'_blank'}
            className={'link-secondary'}>https://www.zwiftpower.com/viewtopic.php?f=11&t=8686</a></p>
        <h5>POWER METERS AND HEART RATE MONITORS </h5>
        <p>
            All racers must be fully registered at zwiftpower.com to be included in series standings. Fair play and
            transparency is one of the cornerstones that VCRT was built upon, hence a power meter and heart rate monitor
            are required to participate in this series. Racers without a true power source (zpower) or without a heart
            rate monitor will be removed from podiums and will not be included in KOM or Sprint jersey competitions. If
            you have a power meter/smart trainer, be sure to calibrate regularly as instructed by the manufacturer.
            Accurate data is crucial for the promotion of fair Zwift racing.
        </p>
    </Container>
</>
