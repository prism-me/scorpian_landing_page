import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

// importing all the themes
import Theme2 from "../themes/theme2";
import NotFound from "../themes/404";

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
