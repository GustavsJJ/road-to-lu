import React from "react";
import logo from "../logo.svg";
import { withNamespaces } from "react-i18next";
import "./ReactApp.css";

function ReactApp({ t }) {
  return (
    <div className="ReactApp">
      <h1>{t("Welcome to React")}</h1>
      <header className="ReactApp-header">
        <img src={logo} className="ReactApp-logo" alt="logo" />
        <p>
          Edit <code>src/ReactApp.js</code> and save to reload.
        </p>
        <a
          className="ReactApp-link"
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
