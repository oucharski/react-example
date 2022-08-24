import { MouseEventHandler } from "react";
import "./Button.css";

type ButtonProps = {
  children: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const Button = (props: ButtonProps) => {
  return (
    <button onClick={props.onClick} className="glow-on-hover" type="button">
      {props.children}
    </button>
  );
};
