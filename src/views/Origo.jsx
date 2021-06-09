import React from "react";
import { withNamespaces } from "react-i18next";
import { NextChapter } from "../components/NextChapter";
import Chapter from "../components/Chapter/Chapter";
import origo from "../images/origo.jpg";

function Origo({ t }) {
  return (
    <div class="origo">
      <Chapter title="ORIGO" description="ORIGO_DESC" />
      <div className="container">
        <img className="hero-image" src={origo} alt="origo" />
        <p>{t("ORIGO1")}</p>
        <p>{t("ORIGO2")}</p>
        <p>{t("ORIGO3")}</p>
      </div>
      <NextChapter to="/riga" />
    </div>
  );
}

export default withNamespaces()(Origo);
