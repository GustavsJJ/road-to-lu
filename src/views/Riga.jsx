import React from "react";
import { withNamespaces } from "react-i18next";
import { NextChapter } from "../components/NextChapter";
import Chapter from "../components/Chapter/Chapter";

function Riga({ t }) {
  return (
    <div class="riga">
      <Chapter title="RIGA" description="DESC" />
      <div className="container">
        <h5>{t("Welcome to React")}</h5>
      </div>
      <NextChapter to="/university" />
    </div>
  );
}

export default withNamespaces()(Riga);
