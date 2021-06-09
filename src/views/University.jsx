import React from "react";
import { withNamespaces } from "react-i18next";
import Chapter from "../components/Chapter/Chapter";

function University({ t }) {
  return (
    <div class="university">
      <Chapter title="UNIVERSITY" description="UNIVERSITY_DESC" />
      <div className="container">
        <h5>{t("Welcome to React")}</h5>
      </div>
      <div className="next-chapter-container">
        <h4 className="next-chapter-text">{t("END_OF_THE_ROAD")}</h4>
      </div>
    </div>
  );
}

export default withNamespaces()(University);
