import React, { Component } from "react";
import "./App.css";
import Counter1 from "./components/counter1";
import StateTutorial from "./components/useState/stateTutorial";
import Memo from "./components/useMemo/memoTutorial";
import Parent from "./components/useCallBack/parent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("componentDidMount: when component renders first time");
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <Counter1 count={this.state.count} />
        <button
          className="App-button"
          onClick={() => this.increment()}
        >Click me</button>
        <StateTutorial />
        <Memo />
        <Parent />
      </div>
    );
  }
}

export default App;
