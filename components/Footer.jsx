import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>Med Store all rights reserved.</p>
      <div className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </div>
    </div>
  );
};

export default Footer;
