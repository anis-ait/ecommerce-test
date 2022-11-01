import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const HeroBanner = ({
  heroBanner: {
    image,
    buttonText,
    smallText,
    midText,
    largeText2,
    discount,
    desc,
    saleTime,
    product,
  },
}) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{smallText}</p>
        <h3>{midText}</h3>
        <h1>{largeText2}</h1>
        <div>
          <Link href={`/product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
        </div>
        <img src={urlFor(image)} className="hero-banner-image" />
      </div>
    </div>
  );
};

export default HeroBanner;
