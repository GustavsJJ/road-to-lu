import React from "react";
import i18n from "../../i18n";
import { withNamespaces } from "react-i18next";
import Navigation from "./Navigation";
import "./Header.css";

function Header({ t }) {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="header p-3">
      <div className="d-flex">
        <h5>{t("Welcome to React")}</h5>
        <div className="mx-5">
          <button onClick={() => changeLanguage("lv")}>lv</button>
          <button onClick={() => changeLanguage("en")}>en</button>
        </div>
      </div>

      <Navigation />
    </div>
  );
}

export default withNamespaces()(Header);
