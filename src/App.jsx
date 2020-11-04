import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import TrackHome from './components/TrackHome';

export default function App() {
  return (
    <Router>
      <div>
        <h1>react</h1>
        <Switch>
          <Route path="/" exact component={TrackHome} />
        </Switch>
      </div>
    </Router>
  );
}
