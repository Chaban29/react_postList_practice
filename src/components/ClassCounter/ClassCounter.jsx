import React from "react";
import classes from "../styles/main.module.scss";

class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    if (this.state.count < 1) {
      return;
    }
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div className={classes.classCounter}>
        <h1 className={classes.counter__number}>{this.state.count}</h1>
        <button onClick={this.increment} className={classes.count__btn}>
          {this.props.increase}
        </button>
        <button onClick={this.decrement} className={classes.count__btn}>
          {this.props.decrease}
        </button>
      </div>
    );
  }
}

export default ClassCounter;
