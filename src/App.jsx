import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

import Login from "./components/Login";
import TrackingResults from "./components/TrackingResults";

export default function App() {
  return (
    <Router>
      <RecoilRoot>
        <div>
          <h1>react</h1>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/results" component={TrackingResults} />
            {/* <Route
            path="/results/:query"
            render={({ match }) => <TrackingResults match={match} />}
          /> */}
          </Switch>
        </div>
      </RecoilRoot>
    </Router>
  );
}
