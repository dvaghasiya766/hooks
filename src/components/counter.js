import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.count !== this.props.count) {
      console.log("componentDidUpdate: when component updates");
      console.log("prevProps", prevProps);
      console.log("this.props", this.props);
    }
  }

  render() {
    return (
      <div>
        <h1>{this.props.count}</h1>{" "}
      </div>
    );
  }
}

export default Counter;
