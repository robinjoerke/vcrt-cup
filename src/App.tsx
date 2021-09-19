import React from 'react';
import './style/style.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {
    ResultsA,
    ResultsB,
    ResultsC,
    ResultsD
} from "./pages/Results";
import {Landing} from "./pages/Landing";
import {Schedule} from "./pages/Schedule";

export default function App() {

    return <>

        <Router>
            <Switch>
                <Route path="/results-a">
                    <ResultsA />
                </Route>
                <Route path="/results-b">
                    <ResultsB />
                </Route>
                <Route path="/results-c">
                    <ResultsC />
                </Route>
                <Route path="/results-d">
                    <ResultsD />
                </Route>
                <Route path="/schedule">
                    <Schedule />
                </Route>
                <Route path="/">
                    <Landing />
                </Route>
            </Switch>
        </Router>
    </>

}
