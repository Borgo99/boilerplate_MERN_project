import React, { HTMLAttributes, ReactNode } from "react";
import Text, { TextProps } from "./Text";
import styles from "../../styles/Title.module.scss";

const Title = (props: TextProps) => {
  return (
    <Text type="h1" className={styles.title} {...props}>
      {props.children}
    </Text>
  );
};

export default Title;
