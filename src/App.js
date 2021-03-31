import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./theme.scss";
import Banner from "./components/Banner";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Dance from "./components/Dance";

export default function App() {
  return (
    <Router basename="/tdc-react">
      <div>
        <Banner />
        <div className="container pt-5">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/dance">
              <Dance />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
