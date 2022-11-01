import React from "react";

import { client } from "../lib/client";
import { FooterBanner, HeroBanner, Product } from "../components/index";

const Home = ({ products, bannerData }) => {
  return (
    <div className="main-container">
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h1>Best Selling Products</h1>
        <p>High quality</p>
      </div>
      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const productsQuery = `*[_type == "product"]`;
  const bannerQuery = `*[_type == "banner"]`;

  const products = await client.fetch(productsQuery);
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
