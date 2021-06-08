import React from "react";
import logo from "../logo.svg";
import { withNamespaces } from "react-i18next";

function ReactApp({ t }) {
  return (
    <div className="App">
      <h1>{t("Welcome to React")}</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default withNamespaces()(ReactApp);
