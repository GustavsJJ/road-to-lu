import React from "react";
import { withNamespaces } from "react-i18next";
import { NextChapter } from "../components/NextChapter";
import Chapter from "../components/Chapter/Chapter";
import origo from "../images/origo.jpg";

function Origo({ t }) {
  return (
    <div class="origo">
      <Chapter title="ORIGO" description="DESC" />
      <div className="container">
        <img className="hero-image" src={origo} alt="origo" />
        <h5>{t("Welcome to React")}</h5>
      </div>
      <NextChapter to="/riga" />
    </div>
  );
}

export default withNamespaces()(Origo);
