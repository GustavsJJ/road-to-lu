import React from "react";
import { withNamespaces } from "react-i18next";
import Chapter from "../components/Chapter/Chapter";
import ogresStacija from "../images/ogres-stacija.jpg";

function Ogre({ t }) {
  return (
    <div class="ogre">
      <Chapter title="OGRE" description="DESC" />
      <div className="container">
        <img className="hero-image" src={ogresStacija} alt="ogres-stacija" />
        <h5>{t("Welcome to React")}</h5>
      </div>
    </div>
  );
}

export default withNamespaces()(Ogre);
