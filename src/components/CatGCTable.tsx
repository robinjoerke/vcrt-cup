import {
    RiderRaceResult,
    RiderSeriesResult
} from "../stores/races/types";
import {Table} from "react-bootstrap";
import {sec2time} from "../stores/races/dataConversion";
import React from "react";

export const CatGCTable = (props: { title: string, gc: RiderSeriesResult[], id?: string }) => {
    let leaderTime = 0;
    if (props.gc.length > 0) {
        leaderTime = props.gc[0].gcTime;
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
                <th>included bonus seconds</th>
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
                        <td>{sec2time(riderRaceResult.gcTime)}</td>
                        <td>{riderRaceResult.gcTime === leaderTime ? '-' : sec2time(riderRaceResult.gcTime - leaderTime)}</td>
                        <td>{riderRaceResult.bonusSeconds ? `${riderRaceResult.bonusSeconds} sec` : '-'}</td>
                        <td>{riderRaceResult.sprintPoints}</td>
                        <td>{riderRaceResult.komPoints}</td>
                    </tr>
                )
            }
            </tbody>
        </Table>
    </>
}
