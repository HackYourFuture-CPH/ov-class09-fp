import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import axios from "axios";
import { getAuthToken } from "./utilities/getTokenData";

//axios.defaults.headers.common["Authorization"] = getAuthToken();
axios.defaults.headers.common["Content-Type"] =
  "application/json;charset=UTF-8";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
