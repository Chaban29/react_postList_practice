import { useState } from "react";
import classes from "../styles/main.module.scss";

const Counter = (props) => {
  const [count, setCount] = useState(0);


  const Increment = () => {
    setCount(count + 1);
  };

  const Decrement = () => {
    if (count < 1) {
      return;
    }
    setCount(count - 1);
  };

  return (
    <div className={classes.counter}>
      <h3 className={classes.number}>{count}</h3>
      <button className={classes.counter__btn} onClick={Increment}>
        {props.increase}
      </button>
      <button
        className={classes.counter__btn}
        style={{ marginLeft: "10px" }}
        onClick={Decrement}
      >
        {props.decrease}
      </button>
    </div>
  );
};

export default Counter;
