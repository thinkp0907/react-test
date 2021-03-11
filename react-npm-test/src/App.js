import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Route, HashRouter } from "react-router-dom";
import Home from "./routes/Home.js";
import Portfolio from "./routes/Portfolio.js";
import About from "./routes/About.js";
import Navigation from "./components/Navigation.js";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Navigation />
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/about" component={About} />
        </HashRouter>
      </div>
    );
  }
}
