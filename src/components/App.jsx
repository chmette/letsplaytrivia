import React from 'react';
import {
  BrowserRouter as Router,
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
        <Route exact path="/letsplaytrivia/" component={Home} />
        <Route exact path="/Game" component={Setup} />
      </Switch>
    </Router>
  );
};

export default App;
