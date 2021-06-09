import React, { useState } from "react";
import { withNamespaces } from "react-i18next";
import { Link } from "react-router-dom";
import { Collapse } from "reactstrap";
import "./Navigation.css";

function Navigation({ t }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);
  const navigationToggleClick = () => {
    setIsOpen(false);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const links = (
    <ul>
      <Link to="/home" onClick={navigationToggleClick}>
        <li>{t("HOME")}</li>
      </Link>
      <Link to="/ogre" onClick={navigationToggleClick}>
        <li>{t("OGRE")}</li>
      </Link>
      <Link to="/views" onClick={navigationToggleClick}>
        <li>{t("VIEWS")}</li>
      </Link>
      <Link to="/music" onClick={navigationToggleClick}>
        <li>{t("MUSIC")}</li>
      </Link>
      <Link to="/origo" onClick={navigationToggleClick}>
        <li>{t("ORIGO")}</li>
      </Link>
      <Link to="/riga" onClick={navigationToggleClick}>
        <li>{t("RIGA")}</li>
      </Link>
      <Link to="/university" onClick={navigationToggleClick}>
        <li>{t("UNIVERSITY")}</li>
      </Link>
    </ul>
  );

  return (
    <div className="navigation">
      <div className="common-navigation">{links}</div>
      <div className="navigation-toggling">
        <button className="navigation-button" onClick={handleToggle}>
          {t("MENU")}
        </button>
        <Collapse isOpen={isOpen}>{links}</Collapse>
      </div>
    </div>
  );
}

export default withNamespaces()(Navigation);
