import React from "react";
import { withNamespaces } from "react-i18next";
import { HeroImage, NextChapter, Chapter } from "../components";
import baznica from "../images/doma-baznica.jpg";
import daugava from "../images/daugava.jpg";

function Riga({ t }) {
  return (
    <div class="riga">
      <Chapter title="RIGA" description="RIGA_DESC" />
      <div className="container">
        <HeroImage src={baznica} alt="doma-baznica" />
        <p className="mb-4">{t("RIGA1")}</p>
        <HeroImage src={daugava} alt="daugava" ratio="2x1" />
        <p>{t("RIGA2")}</p>
        <p>{t("RIGA3")}</p>
      </div>
      <NextChapter to="/university" />
    </div>
  );
}

export default withNamespaces()(Riga);
