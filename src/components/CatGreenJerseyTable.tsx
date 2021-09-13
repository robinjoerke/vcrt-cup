import {
    RiderRaceResult,
    RiderSeriesResult
} from "../stores/races/types";
import {Table} from "react-bootstrap";
import {sec2time} from "../stores/races/dataConversion";
import React from "react";

export const CatGreenJerseyTable = (props: { title: string, gc: RiderSeriesResult[], id?: string }) => {
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
                <th>Sprint Points</th>
                <th>Races</th>
            </tr>
            </thead>
            <tbody>
            {
                props.gc.map((riderRaceResult, i) =>
                    <tr>
                        <th scope={"row"}>{i + 1}</th>
                        <td dangerouslySetInnerHTML={{__html: riderRaceResult.name}}/>
                        <td>{riderRaceResult.sprintPoints}</td>
                        <td>{riderRaceResult.totalRaces}</td>
                    </tr>
                )
            }
            </tbody>
        </Table>
    </>
}
