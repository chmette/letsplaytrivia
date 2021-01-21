import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

import App from "./components/App";

ReactDOM.render(
  <HashRouter basename={"https://chmette.github.io/letsplaytrivia"}>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
