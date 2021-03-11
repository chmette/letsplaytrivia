import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import '../css/App.css';

import Home from "./Home";
import Setup from "./Setup/Setup";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/game" component={Setup} />
      </Switch>
    </Router>
  );
};

export default App;
