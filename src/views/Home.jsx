import React from "react";
import { withNamespaces } from "react-i18next";
import { NextChapter, Chapter, HeroImage } from "../components";
import soma from "../images/soma.jpg";
import somaLow from "../images/somaLow.jpg";

function Home({ t }) {
  return (
    <div className="home">
      <Chapter title="HOME" description="HOME_DESC" />
      <div className="container">
        <HeroImage src={soma} placeholderSrc={somaLow} alt="soma" />
        <p>{t("HOME1")}</p>
        <p>{t("HOME2")}</p>
        <p>{t("HOME3")}</p>
      </div>
      <NextChapter to="/ogre" />
    </div>
  );
}

export default withNamespaces()(Home);
