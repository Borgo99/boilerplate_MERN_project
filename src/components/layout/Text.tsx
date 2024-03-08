import React, { HTMLAttributes, ReactNode, useMemo } from "react";
// import styles from "../../styles/Text.module.scss";

export interface TextProps {
  children: ReactNode;
  bold?: boolean;
  className?: string;
  color?: string;
  style?: object;
  onClick?: () => any;
  type?: "p" | "h1" | "h2" | "h3" | "h4";
  fontSize?: string | number;
  props?: HTMLAttributes<HTMLElement>;
}
const Text = ({
  children,
  bold,
  className,
  color,
  style,
  onClick,
  type = "p",
  fontSize,
  props,
}: TextProps) => {
  const currStyle = useMemo(() => {
    const tmp = { color, fontSize, ...style };
    if (bold) tmp["fontFamily"] = "Bold";
    return tmp;
  }, [style, bold]);

  return React.createElement(
    type,
    {
      style: currStyle,
      onClick,
      className: `${className || ""}`,
      ...props,
    },
    children
  );
};

export default Text;
