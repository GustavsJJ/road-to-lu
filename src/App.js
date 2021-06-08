import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ReactApp from "./views/ReactApp";
import { withNamespaces } from "react-i18next";

import Home from "./views/Home";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/about">
            <ReactApp />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default withNamespaces()(App);
