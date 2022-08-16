import Head from "next/head";
import React from "react";

type Props = {
  title?: string;
};

const Header = (props: Props) => {
  return (
    <Head>
      <title>NCX Exchange {props.title && " | " + props.title}</title>
      <meta name="description" content="Crypto trading" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Header;
