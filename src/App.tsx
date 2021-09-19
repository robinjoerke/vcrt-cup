import React from 'react';
import './style/style.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {Results} from "./pages/Results";
import {Landing} from "./pages/Landing";
import {Schedule} from "./pages/Schedule";
import {Navigation} from "./components/Navbar";

export default function App() {

    return <>

        <Router>
            <Switch>
                <Route path="/results">
                    <Results />
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
