import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withNamespaces } from "react-i18next";
import "./App.css";

import { Home, Ogre, Views, Music, Origo, Riga, University } from "./views";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/ogre">
            <Ogre />
          </Route>
          <Route path="/views">
            <Views />
          </Route>
          <Route path="/music">
            <Music />
          </Route>
          <Route path="/origo">
            <Origo />
          </Route>
          <Route path="/riga">
            <Riga />
          </Route>
          <Route path="/university">
            <University />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default withNamespaces()(App);
