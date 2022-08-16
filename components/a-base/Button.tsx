import React from "react";
import styles from "./Button.module.css";

type Props = {
  title?: string;
  onClick?: Function;
};

const Button = (props: Props) => {
  return (
    <button className={styles.btnGreen} onClick={() => props.onClick && props.onClick()}>
      {props.title}
    </button>
  );
};

export default Button;
