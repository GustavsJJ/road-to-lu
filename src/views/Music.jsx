import React from "react";
import { withNamespaces } from "react-i18next";
import { NextChapter } from "../components/NextChapter";
import Chapter from "../components/Chapter/Chapter";
import sliedes from "../images/sliedes.jpg";
import vilciens from "../images/vilciens.jpg";
import gitara from "../images/gitara.jpg";
import { Media } from "../components/Media";

function Music({ t }) {
  return (
    <div class="music">
      <Chapter title="MUSIC" description="MUSIC_DESC" />
      <div className="container">
        <img className="hero-image" src={sliedes} alt="sliedes" />
        <Media image={vilciens} alt="vilciens" text={t("MUSIC1")} />
        <Media image={gitara} alt="gitara" text={t("MUSIC2")} />
      </div>
      <NextChapter to="/origo" />
    </div>
  );
}

export default withNamespaces()(Music);
