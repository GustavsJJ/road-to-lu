import React from "react";
import { withNamespaces } from "react-i18next";
import Chapter from "../components/Chapter/Chapter";

function Views({ t }) {
  return (
    <div class="views">
      <Chapter title="VIEWS" description="DESC" />
      <div className="container">
        <h5>{t("Welcome to React")}</h5>
      </div>
    </div>
  );
}

export default withNamespaces()(Views);
