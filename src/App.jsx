import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TrackHome from "./components/TrackHome";
import TrackingResults from "./components/TrackingResults";

export default function App() {
  return (
    <Router>
      <div>
        <h1>react</h1>
        <Switch>
          <Route path="/" exact component={TrackHome} />
          <Route
            path="/results/:query"
            render={({ match }) => <TrackingResults match={match} />}
          />
        </Switch>
      </div>
    </Router>
  );
}
