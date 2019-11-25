import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "../App";
import ItemDescription from "./ItemDescription";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/:name" component={ItemDescription} />
    </Switch>
  </BrowserRouter>
);

export default Router;