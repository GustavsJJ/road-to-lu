import React from "react";
import { withNamespaces } from "react-i18next";
import { Link } from "react-router-dom";
import i18next from "i18next";
import "./NextChapter.css";

function NextChapter(props) {
  return (
    <div className="next-chapter-container">
      <Link className="next-chapter-link">
        <button className="next-chapter-button">
          {i18next.t("NEXT_CHAPTER")}
        </button>
      </Link>
    </div>
  );
}

export default withNamespaces()(NextChapter);
