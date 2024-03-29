import {RiderRaceResult} from "../stores/races/types";
import {Table} from "react-bootstrap";
import {sec2time} from "../stores/races/dataConversion";
import React from "react";

export const CatGCTable = (props: { title: string, gc: RiderRaceResult[], id?: string }) => {
    let leaderTime = 0;
    if (props.gc.length > 0) {
        leaderTime = props.gc[0].time;
    }


    return <>
        <h4 id={props.id}>{props.title}</h4>
        <Table striped bordered hover size="sm">
            <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Time</th>
                <th>time to leader</th>
                <th>Sprint Points</th>
                <th>Kom Points</th>
            </tr>
            </thead>
            <tbody>
            {
                props.gc.map((riderRaceResult, i) =>
                    <tr>
                        <th scope={"row"}>{i + 1}</th>
                        <td dangerouslySetInnerHTML={{__html: riderRaceResult.name}}/>
                        <td>{sec2time(riderRaceResult.time)}</td>
                        <td>{riderRaceResult.time === leaderTime ? '-' : sec2time(riderRaceResult.time - leaderTime)}</td>
                        <td>{riderRaceResult.komPoints}</td>
                        <td>{riderRaceResult.sprintPoints}</td>
                    </tr>
                )
            }
            </tbody>
        </Table>
    </>
}
