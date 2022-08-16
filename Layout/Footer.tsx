import React from "react";
import styles from "../styles/Home.module.css";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className={styles.footerContainer}>
      <p>Copyright all right reversed by ncx.</p>
      <div className={styles.footerSocialIcon}>
        <p>social</p>
        <p>social</p>
        <p>social</p>
        <p>social</p>
      </div>
    </footer>
  );
};

export default Footer;
