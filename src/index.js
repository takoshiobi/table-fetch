import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Router from "./components/Router";

ReactDOM.render(<Router />, document.getElementById("root"));

serviceWorker.unregister();
