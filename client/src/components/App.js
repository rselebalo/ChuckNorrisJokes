import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Router } from "react-router";
import auth0Client from "./Auth/Auth";
import history from "./history";
import "../styles/App.css";
import dotenv from "dotenv";

// Pages
import Callback from "../components/Auth/Callback";
import Login  from "../views/Login";
import Categories from "../components/Categories";
import Joke from "../components/Joke";

dotenv.config();

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);


class App extends Component {
  async componentDidMount() {
    try {
      if (!auth0Client.getIdToken()) {
        history.push("/categories");
      }
      await auth0Client.silentAuth();
      this.forceUpdate();
    } catch (err) {
      history.push("/");
    }
  }
  render() {
    return (
      <Router history={history}>
        <React.Suspense fallback={loading()}>
          <Switch>
            <Route
              exact
              path="/"
              name="Login Page"
              component={Login}
            />
            <Route
              path="/categories"
              name="Categories"
              component={Categories}
            />
            <Route
              path="/joke/:category"
              name="joke"
              component={Joke}
            />
            <Route
              exact
              path="/callback"
              name="Callback Page"
              component={Callback}
            />
          </Switch>
        </React.Suspense>
      </Router>
    );
  }
}

export default App;
