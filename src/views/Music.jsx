import React, { useEffect, useState } from "react";
import { withNamespaces } from "react-i18next";
import { Carousel } from "react-responsive-carousel";
import { HeroImage, Chapter, NextChapter, Media } from "../components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import sliedes from "../images/sliedes.jpg";
import vilciens from "../images/vilciens.jpg";
import gitara from "../images/gitara.jpg";

function Music({ t }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setScreenWidth(window.innerWidth));
    return () => {
      window.removeEventListener("resize", () =>
        setScreenWidth(window.innerWidth)
      );
    };
  }, [screenWidth]);

  const getLayout = () => {
    if (screenWidth >= 950) {
      return (
        <div className="container">
          <HeroImage src={sliedes} alt="sliedes" />
          <Media image={vilciens} alt="vilciens" text={t("MUSIC1")} />
          <Media image={gitara} alt="gitara" text={t("MUSIC2")} />
        </div>
      );
    } else
      return (
        <div className="container">
          <Carousel
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            stopOnHover={true}
            infiniteLoop={true}
          >
            <img src={sliedes} alt="sliedes" />
            <img src={vilciens} alt="vilciens" />
            <img src={gitara} alt="gitara" />
          </Carousel>
          <p style={{ marginTop: 30 }}>{t("MUSIC1")}</p>
          <p>{t("MUSIC2")}</p>
        </div>
      );
  };

  return (
    <div class="music">
      <Chapter title="MUSIC" description="MUSIC_DESC" />
      {getLayout()}
      <NextChapter to="/origo" />
    </div>
  );
}

export default withNamespaces()(Music);
