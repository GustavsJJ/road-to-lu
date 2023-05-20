import React from "react";
import { withNamespaces } from "react-i18next";
import { HeroImage, Chapter, NextChapter } from "../components";
import logs from "../images/logs.jpg";
import udenskritums from "../images/udenskritums.jpg";

function Views({ t }) {
  return (
    <div class="views">
      <Chapter title="VIEWS" description="VIEWS_DESC" />
      <div className="container">
        <HeroImage src={logs} alt="logs" />
        <p>{t("VIEWS1")}</p>
        <img className="hero-image" src={udenskritums} alt="udenskritums" />
        <p>{t("VIEWS2")}</p>
      </div>
      <NextChapter to="/music" />
    </div>
  );
}

export default withNamespaces()(Views);
