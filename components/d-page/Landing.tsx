import React from "react";
import Layout from "../../Layout/Layout";
import AssetSection from "../c-section/AssetSection";
import ChooseSection from "../c-section/ChooseSection";
import ContactSection from "../c-section/ContactSection";
import FeatureSection from "../c-section/FeatureSection";
import IntroSection from "../c-section/IntroSection";

type Props = {};

const Landing = (props: Props) => {
  return (
    <Layout>
        <IntroSection />
        <FeatureSection />
        <ChooseSection />
        <AssetSection />
        <ContactSection />
    </Layout>
  );
};

export default Landing;
