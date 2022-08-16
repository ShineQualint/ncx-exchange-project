import React from "react";
import styles from "./Navbar.module.css";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className={styles.navControl}>
      <div className={styles.navLogo}>
        <h1>Logo</h1>
      </div>
      <ul className={styles.navList}>
        <li onClick={() => console.log("about me")} className={styles.navItem}>
          About Me
        </li>
        <li onClick={() => console.log("features")} className={styles.navItem}>
          Features
        </li>
        <li onClick={() => console.log("why us")} className={styles.navItem}>
          Why Us
        </li>
        <li
          onClick={() => console.log("asset list")}
          className={styles.navItem}
        >
          Asset List
        </li>
        <li
          onClick={() => console.log("contact us")}
          className={styles.navItem}
        >
          Contact Us
        </li>
      </ul>
      <div className={styles.navButtonGroup}>
        <h2>Button</h2>
      </div>
    </nav>
  );
};

export default Navbar;
