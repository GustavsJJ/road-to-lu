import React from "react";
import { withNamespaces } from "react-i18next";
import Chapter from "../components/Chapter/Chapter";

function University({ t }) {
  return (
    <div class="university">
      <Chapter title="UNIVERSITY" description="DESC" />
      <div className="container">
        <h5>{t("Welcome to React")}</h5>
      </div>
    </div>
  );
}

export default withNamespaces()(University);
