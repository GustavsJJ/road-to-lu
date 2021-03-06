import React from "react";
import { withNamespaces } from "react-i18next";
import { Link } from "react-router-dom";
import i18next from "i18next";
import "./NextChapter.css";

function NextChapter(props) {
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div className="next-chapter-container">
      <h4 className="next-chapter-text">{i18next.t("CONTINUE_READING")}</h4>
      <Link className="next-chapter-link" to={props.to} onClick={scrollToTop}>
        <button className="next-chapter-button">
          {i18next.t("NEXT_CHAPTER")}
        </button>
      </Link>
    </div>
  );
}

export default withNamespaces()(NextChapter);
