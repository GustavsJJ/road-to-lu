import React from "react";
import { withNamespaces } from "react-i18next";
import i18next from "i18next";
import "./Chapter.css";

function Chapter(props) {
  return (
    <div className="chapter-name">
      <h1>{i18next.t(props.title)}</h1>
      <h5 className="mt-3">{i18next.t(props.description)}</h5>
    </div>
  );
}

export default withNamespaces()(Chapter);
