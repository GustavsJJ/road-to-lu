import React from "react";
import { withNamespaces } from "react-i18next";
import "./Footer.css";
import i18n from "i18next";
import LuLogoLV from "../../images/LU-logo-LV.png";
import LuLogoEN from "../../images/LU-logo-EN.png";

function Footer() {
  return (
    <div className="footer">
      <img
        className="lu-logo"
        src={i18n.language === "lv" ? LuLogoLV : LuLogoEN}
        alt="LU-logo"
      />
      <div className="d-flex flex-wrap justify-content-around">
        <p className="mx-2">{i18n.t("MADE_BY")}:</p>
        <p className="mx-2">Gustavs Jānis Jākobsons</p>
      </div>
      <div className="d-flex flex-wrap justify-content-around">
        <p className="mx-3" style={{ alignItems: "left", color: "white" }}>
          <a
            className="github-link"
            href="https://github.com/GustavsJJ"
            target="_blank"
            rel="noreferrer"
          >
            GustavsJJ
            <svg
              className="octicon octicon-mark-github pb-1 ml-1"
              height="20"
              viewBox="0 0 16 16"
              version="1.1"
              width="20"
              aria-hidden="true"
            >
              <path
                fill="white"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
              />
            </svg>
          </a>
        </p>
        <p className="mx-3">gustavs.jakobsons@gmail.com</p>
      </div>

      <a
        className="repo-link mb-5"
        href="https://github.com/GustavsJJ/road-to-lu"
      >
        {i18n.t("PROJ_DETAILS")}
      </a>
    </div>
  );
}

export default withNamespaces()(Footer);
