import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  HTMLAttributes,
} from "react";
import styles from "../../styles/Button.module.scss";
import Link from "next/link";

interface ButtonPropsBase {
  children: React.ReactNode;
}
type ButtonProps = ButtonPropsBase & ButtonHTMLAttributes<HTMLButtonElement>;
type LinkProps = ButtonPropsBase & AnchorHTMLAttributes<HTMLAnchorElement>;
const Button = (props: ButtonProps | LinkProps) => {
  if ("href" in props)
    return (
      <Link
        href={props.href!}
        {...props}
        className={`${styles.button} ${props.className || ""}`}
      >
        {props.children}
      </Link>
    );

  return (
    //@ts-ignore
    <button {...props} className={`${styles.button} ${props.className || ""}`}>
      {props.children}
    </button>
  );
};

export default Button;
