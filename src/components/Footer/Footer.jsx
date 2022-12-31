// footer

import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* use svg from images  as background image */}

      <p className="footer-p">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
