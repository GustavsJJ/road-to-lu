import React from "react";
import "./HeroImage.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

function HeroImage(props) {
  return (
    <LazyLoadImage
      className="hero-image"
      effect="blur"
      alt={props.alt}
      {...props}
    />
    // <img className="hero-image" loading="lazy" alt={props.alt} {...props} />
  );
}

export default HeroImage;
