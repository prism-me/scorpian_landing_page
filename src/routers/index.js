import React, { lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "../themes/404";

const Theme2 = lazy(() => import("../themes/theme2"));

export default class Routes extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Theme2} />
            <Route path="/:id" component={Theme2} />
            <Route exact path="/404" component={NotFound} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
