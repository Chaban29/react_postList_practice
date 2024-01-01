import React from "react";
import classes from "../Modal/modalWindow.module.scss";

const ModalWindow = ({ children }) => {
  return (
    <div className={[classes.myModal, classes.active].join(" ")}>
      <div className={classes.myModalContent}>{children}</div>
    </div>
  );
};

export default ModalWindow;
