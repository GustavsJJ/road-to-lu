import React, { useState } from "react";
import { withNamespaces } from "react-i18next";
import { Link } from "react-router-dom";
import { Collapse } from "reactstrap";
import "./Navigation.css";

function Navigation({ t }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);

  const links = (
    <ul>
      <Link to="/home">
        <li>{t("HOME")}</li>
      </Link>
      <Link to="/ogre">
        <li>{t("OGRE")}</li>
      </Link>
      <Link to="/views">
        <li>{t("VIEWS")}</li>
      </Link>
      <Link to="/music">
        <li>{t("MUSIC")}</li>
      </Link>
      <Link to="/origo">
        <li>{t("ORIGO")}</li>
      </Link>
      <Link to="/riga">
        <li>{t("RIGA")}</li>
      </Link>
      <Link to="/university">
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
