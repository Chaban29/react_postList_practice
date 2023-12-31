import React from "react";
import classes from "../button/button.module.scss";

const Button = ({children,  ...props }) => {
  return (
    <button {...props} className={classes.button}>
      {props.name}
    </button>
  );
};

export default Button;
