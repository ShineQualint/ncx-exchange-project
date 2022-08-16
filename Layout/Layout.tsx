import React from "react";
import Header from "./Header";
import styles from "../styles/Home.module.css";
import Navbar from "../components/b-combine/Navbar";
import Footer from "./Footer";

type Props = {
  title?: string;
  children?: React.ReactElement<any>[];
};

const Layout = (props: Props) => {
  return (
    <div className={styles.container}>
      <Header title={props.title} />
      <Navbar />
      <main className={styles.main}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
