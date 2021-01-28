import React from "react";
import './Counter.css'

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: parseInt(props.init),
    };
  }
  render() {
    const { count } = this.state;
    return (
      <>
        <h4>{count}</h4>
        <div className="counter-container">
          <button
            onClick={() => {
              this.setState({ count: count + 1 });
            }}
          >
            Sumar
          </button>
          <button
            onClick={() => {
              this.setState({ count: count - 1 });
            }}
          >
            Restar
          </button>
        </div>
      </>
    );
  }
}

export default Counter;
