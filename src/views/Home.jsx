import React from "react";
import { withNamespaces } from "react-i18next";
import Chapter from "../components/Chapter/Chapter";
import soma from "../images/soma.JPG";
import "./Home.css";

function Home({ t }) {
  return (
    <div class="home">
      <Chapter title="HOME" description="DESC" />
      <div className="container">
        <img src={soma} alt="soma" style={{ width: "100%" }} />
        <h5>{t("Welcome to React")}</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
          repellendus laborum tenetur obcaecati maiores beatae fugit odio
          voluptate accusantium, neque tempora animi illum error non assumenda
          dicta accusamus, quisquam ipsam?
        </p>
      </div>
    </div>
  );
}

export default withNamespaces()(Home);
