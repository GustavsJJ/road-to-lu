import React from "react";
import { withNamespaces } from "react-i18next";
import Chapter from "../components/Chapter/Chapter";
import { NextChapter } from "../components/NextChapter";
import soma from "../images/soma.jpg";

function Home({ t }) {
  return (
    <div class="home">
      <Chapter title="HOME" description="HOME_DESC" />
      <div className="container">
        <img className="hero-image" src={soma} alt="soma" />
        <p>{t("HOME1")}</p>
        <p>{t("HOME2")}</p>
        <p>{t("HOME3")}</p>
      </div>
      <NextChapter to="/ogre" />
    </div>
  );
}

export default withNamespaces()(Home);
