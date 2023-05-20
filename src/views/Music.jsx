import React from "react";
import { withNamespaces } from "react-i18next";
import { HeroImage, Chapter, NextChapter, Media } from "../components";
import sliedes from "../images/sliedes.jpg";
import vilciens from "../images/vilciens.jpg";
import gitara from "../images/gitara.jpg";

function Music({ t }) {
  return (
    <div class="music">
      <Chapter title="MUSIC" description="MUSIC_DESC" />
      <div className="container">
        <HeroImage src={sliedes} alt="sliedes" />
        <Media image={vilciens} alt="vilciens" text={t("MUSIC1")} />
        <Media image={gitara} alt="gitara" text={t("MUSIC2")} />
      </div>
      <NextChapter to="/origo" />
    </div>
  );
}

export default withNamespaces()(Music);
