import React from "react";
import { withNamespaces } from "react-i18next";
import Chapter from "../components/Chapter/Chapter";
import { NextChapter } from "../components/NextChapter";
import soma from "../images/soma.jpg";
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
          dicta accusamus, quisquam ipsam? Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Et laborum excepturi quaerat fuga,
          tempore voluptate animi blanditiis autem cum sed vitae laboriosam
          minus, accusantium minima tenetur veritatis, incidunt magni dolorum!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
          repellendus laborum tenetur obcaecati maiores beatae fugit odio
          voluptate accusantium, neque tempora animi illum error non assumenda
          dicta accusamus, quisquam ipsam? Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Et laborum excepturi quaerat fuga,
          tempore voluptate animi blanditiis autem cum sed vitae laboriosam
          minus, accusantium minima tenetur veritatis, incidunt magni dolorum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
          repellendus laborum tenetur obcaecati maiores beatae fugit odio
          voluptate accusantium, neque tempora animi illum error non assumenda
          dicta accusamus, quisquam ipsam? Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Et laborum excepturi quaerat fuga,
          tempore voluptate animi blanditiis autem cum sed vitae laboriosam
          minus, accusantium minima tenetur veritatis, incidunt magni dolorum!
        </p>
      </div>
      <NextChapter />
    </div>
  );
}

export default withNamespaces()(Home);
