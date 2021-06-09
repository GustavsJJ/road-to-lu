import React from "react";
import { withNamespaces } from "react-i18next";
import "./Media.css";

function Media(props) {
  return (
    <div className="container-media">
      <img src={props.image} alt={props.alt} />
      <p>{props.text}</p>
    </div>
  );
}

export default withNamespaces()(Media);
