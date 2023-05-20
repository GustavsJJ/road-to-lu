import React from "react";
import { withNamespaces } from "react-i18next";
import { HeroImage, Chapter, NextChapter } from "../components";
import origo from "../images/origo.jpg";

function Origo({ t }) {
  return (
    <div class="origo">
      <Chapter title="ORIGO" description="ORIGO_DESC" />
      <div className="container">
        <HeroImage src={origo} alt="origo" />
        <p>{t("ORIGO1")}</p>
        <p>{t("ORIGO2")}</p>
        <p>{t("ORIGO3")}</p>
      </div>
      <NextChapter to="/riga" />
    </div>
  );
}

export default withNamespaces()(Origo);
