import React from "react";
import classes from "../input/input.module.scss";

const Input = React.forwardRef((props, ref) => {
  return <input ref={ref} type="text" className={classes.input} {...props} />;
});

export default Input;
