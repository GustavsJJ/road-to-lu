import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "./HeroImage.css";

function HeroImage(props) {
  return (
    <div
      className={`hero-container ratio-${props.ratio ?? "4x3"}`}
      style={props.style}
    >
      <LazyLoadImage
        className="hero-image"
        effect="opacity"
        alt={props.alt}
        src={props.src}
      />
    </div>
  );
}

export default HeroImage;
