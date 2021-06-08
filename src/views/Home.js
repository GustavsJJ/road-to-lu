import React from "react";
import { withNamespaces } from "react-i18next";

function Home({ t }) {
  return (
    <div>
      <h1>Home</h1>
      <h5>{t("Welcome to React")}</h5>
    </div>
  );
}

export default withNamespaces()(Home);
