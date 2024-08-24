import React from "react";
import style from "./Footer.module.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Importing social media icons

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerTop}>
        <div className={style.logoSection}>
          <img src="/logo2.png" alt="Imangi-logo" className={style.logo} />
          <p>
            Ireo Grand View Towers 14th Floor, Golf Course Extension Road,
            Sector 58, Gurugram
          </p>
        </div>
        <div className={style.linkSections}>
          <a href="/about-us">About Us</a>
          <a href="/terms">Terms of Service</a>
          <a href="/locations">Locations</a>
          <a href="/faq">FAQ</a>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/feedback">Feedback</a>
        </div>
      </div>
      <div className={style.footerBottom}>
        <div className={style.socialMedia}>
          <a href="https://facebook.com/YourPage" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://twitter.com/YourHandle" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://instagram.com/YourProfile" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com/company/YourCompany" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
        <p>All rights reserved for Imangi</p>
      </div>
    </footer>
  );
};

export default Footer;
