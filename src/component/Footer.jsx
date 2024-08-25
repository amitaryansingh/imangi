import React from 'react';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.brandTag}>
          <img src="/logo2.png" alt="Imangi" className={styles.logo} />
        </div>
        <div className={styles.rightSection}>
          <div className={styles.address}>
            <p>
              1234 Imangi St, Suite 567<br />
              City, State, 12345
            </p>
          </div>
        </div>
      </div>
      <div className={styles.centerSection}>
        <div className={styles.socialIcons}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
      </div>
      <div className={styles.footerLinks}>
        <a href="/about" className={styles.link}>About Us</a>
        <a href="/contact" className={styles.link}>Contact Us</a>
        <a href="/faq" className={styles.link}>FAQ</a>
        <a href="/feedback" className={styles.link}>Feedback</a>
      </div>
      <div className={styles.copyright}>
        <p>
          Copyright © 2024 Bigtree Entertainment Pvt. Ltd. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;