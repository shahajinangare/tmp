import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import React, { Component } from "react";

const Loading = () => <div>Loading...</div>;

const Home = Loadable({
  loader: () => import("./home"),
  loading: Loading
});

const About = Loadable({
  loader: () => import("./listnumber"),
  loading: Loading
});

class LoadableComp extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/listnumber" component={About} />
        </Switch>
      </Router>
    );
  }
}

export default LoadableComp;
