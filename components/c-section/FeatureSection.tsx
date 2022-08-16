import React from "react";
import CardFeature from "../b-combine/CardFeature";

type Props = {};

const arrFeatures = [
  {
    icon: "",
    title: "Manage Portfolio",
    description:
      "Buy and sell popular digital currencies, keep track of them in the one place.",
  },
  {
    icon: "",
    title: "Protected Securely",
    description:
      "All cash balances are covered by FDIC insurance, up to a maximum of $250,000.",
  },
  {
    icon: "",
    title: "Cryptocurrency Variety",
    description:
      "Supports a variety of the most popular digital currencies and always uptodate.",
  },
  {
    icon: "",
    title: "Learn Best Practice",
    description:
      "Easy to know how to cryptocurrency works and friendly to newbie.",
  },
];

const FeatureSection = (props: Props) => {
  return (
    <section className="featuresContainer">
      <img src="/LandingPage/wave-bottom.svg" alt="wave of ncx exchange" />
      <h1 className="title">Exchange Features</h1>
      <p className="description">
        Explore sensational features to prepare your best investment in
        cryptocurrency
      </p>
      <div className="featuresCardContainer">
        {arrFeatures.map((d, i) => (
          <CardFeature key={i} title={d.title} description={d.description} />
        ))}
      </div>
      <img src="/LandingPage/wave-top.svg" alt="wave of ncx exchange" />
    </section>
  );
};

export default FeatureSection;
