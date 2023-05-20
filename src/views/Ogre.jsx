import React from "react";
import { withNamespaces } from "react-i18next";
import { HeroImage, Chapter, NextChapter } from "../components";
import ogresStacija from "../images/ogres-stacija.jpg";

function Ogre({ t }) {
  return (
    <div class="ogre">
      <Chapter title="OGRE" description="OGRE_DESC" />
      <div className="container">
        <HeroImage src={ogresStacija} alt="ogres-stacija" />
        <p>{t("OGRE1")}</p>
        <p>{t("OGRE2")}</p>
      </div>
      <NextChapter to="/views" />
    </div>
  );
}

export default withNamespaces()(Ogre);
