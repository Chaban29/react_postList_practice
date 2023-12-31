import React from "react";
import classes from "../styles/main.module.scss";
import { useState } from "react";

const Input = ({children , ...props}) => {
  const [value, setValue] = useState("Clear this text, and write your...");

  return (
    <div className={classes.input}>
      <p className={classes.input__paragraph}>
        This input has name is: controlled
      </p>
      <h2 className={classes.input__value}>{value}</h2>
      <input
        {...props}
        type="text"
        className={classes.input__item}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
};

export default Input;
