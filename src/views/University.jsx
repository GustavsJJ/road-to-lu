import React from "react";
import { withNamespaces } from "react-i18next";
import { HeroImage, Chapter } from "../components";
import university from "../images/university.jpg";

function University({ t }) {
  return (
    <div class="university">
      <Chapter title="UNIVERSITY" description="UNIVERSITY_DESC" />
      <div className="container">
        <HeroImage src={university} alt="university" />
        <p>{t("UNIVERSITY1")}</p>
        <p>{t("UNIVERSITY2")}</p>
        <p>{t("UNIVERSITY3")}</p>
        <p>{t("UNIVERSITY4")}</p>
      </div>
      <div className="next-chapter-container">
        <h4 className="next-chapter-text">{t("END_OF_THE_ROAD")}</h4>
      </div>
    </div>
  );
}

export default withNamespaces()(University);
