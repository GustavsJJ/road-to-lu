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
    <div className="header p-5 pb-3">
      <div className="language-selector d-flex">
        <p className="lang" onClick={() => changeLanguage("lv")}>
          LV
        </p>
        <p className="mx-1">/</p>
        <p className="lang" onClick={() => changeLanguage("en")}>
          EN
        </p>
      </div>
      <h3 className="logo mx-4">{t("MY_ROAD_TO_UNIVERSITY")}</h3>
      <hr style={{ width: "70%", marginLeft: "auto", marginRight: "auto" }} />
      <Navigation />
    </div>
  );
}

export default withNamespaces()(Header);
