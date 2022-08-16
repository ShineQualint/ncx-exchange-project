import React from "react";
import styles from "./CardFeature.module.css";

type Props = {
  title?: string;
  description?: string;
};

const CardFeature = (props: Props) => {
  return (
      <div className={styles.cardFeature}>
        <img src="/LandingPage/feature-image.svg" alt="feature" width={80} height={80} />
        <div className={styles.textFeatureContainer}>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </div>
        <div className={styles.featureExplained}>
          <p>See Explained</p>
          <p>{" -> "}</p>
        </div>
      </div>
  );
};

export default CardFeature;
