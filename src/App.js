import React, { Component } from "react";
import "./App.css";
import whoseMove from "./tests/test1";
import arrayMaximalAdjacentDifference from "./tests/test2";
import makeArrayConsecutive from "./tests/test3";

class App extends Component {
  constructor() {
    super();
    this.state = {
      test11: false,
      test12: false,
      test13: false,
      test21: false,
      test22: false,
      test23: false,
      test31: false,
      test32: false,
      test33: false
    };
  }

  testTests() {
    //Tests for test 1
    if (whoseMove("black", false) === "white" && !this.state.test11)
      this.setState({ test11: true });
    if (whoseMove("white", true) === "white" && !this.state.test12)
      this.setState({ test12: true });
    if (whoseMove("white", false) === "black" && !this.state.test13)
      this.setState({ test13: true });
    //Tests for test 2
    if (
      arrayMaximalAdjacentDifference([2, 4, 1, 0]) === 3 &&
      !this.state.test21
    )
      this.setState({ test21: true });
    if (
      arrayMaximalAdjacentDifference([-1, 1, -3, -4]) === 4 &&
      !this.state.test22
    )
      this.setState({ test22: true });

    if (
      arrayMaximalAdjacentDifference([-1, 4, 10, 3, -2]) === 7 &&
      !this.state.test23
    )
      this.setState({ test23: true });
    //Tests for test 3
    if (makeArrayConsecutive([5, 4, 7]) === 1 && !this.state.test31)
      this.setState({ test31: true });
    if (makeArrayConsecutive([6, 3]) === 2 && !this.state.test32)
      this.setState({ test32: true });
    if (makeArrayConsecutive([1]) === 0 && !this.state.test33)
      this.setState({ test33: true });
  }

  render() {
    return (
      <div className="App">
        <h1>Speed Coding Challenges!</h1>
        <img src="/Im-back-baby.png" alt="the dog" />
        <p style={{ width: "50%", textAlign: "justify" }}>
          Each team will be given a set of coding questions. The goal is to
          complete each question in the fastest amount of time while also being
          the most bug proof code. Once each question is complete, the opposing
          team will have a chance to debunk the code. If they're able to debunk
          the code, the points will be awarded to them.
        </p>
        <ul
          style={{
            display: "flex",
            textAlign: "left",
            flexDirection: "column"
          }}
        >
          <li>Test 1: Write a function</li>
          <li>Test 2: Debug a function</li>
          <li>Test 3: Solve a real life scenario</li>
        </ul>
        {this.testTests()}
        <ol>
          <li>
            <span style={{ color: this.state.test11 ? "green" : "red" }}>
              Test 1: {`${this.state.test11}`}
            </span>
          </li>
          <li>
            <span style={{ color: this.state.test12 ? "green" : "red" }}>
              Test 1: {`${this.state.test12}`}
            </span>
          </li>
          <li>
            <span style={{ color: this.state.test13 ? "green" : "red" }}>
              Test 1: {`${this.state.test13}`}
            </span>
          </li>
          <li>
            <span style={{ color: this.state.test21 ? "green" : "red" }}>
              Test 2: {`${this.state.test21}`}
            </span>
          </li>
          <li>
            <span style={{ color: this.state.test22 ? "green" : "red" }}>
              Test 2: {`${this.state.test22}`}
            </span>
          </li>
          <li>
            <span style={{ color: this.state.test23 ? "green" : "red" }}>
              Test 2: {`${this.state.test23}`}
            </span>
          </li>
          <li>
            <span style={{ color: this.state.test31 ? "green" : "red" }}>
              Test 3: {`${this.state.test31}`}
            </span>
          </li>
          <li>
            <span style={{ color: this.state.test32 ? "green" : "red" }}>
              Test 3: {`${this.state.test32}`}
            </span>
          </li>
          <li>
            <span style={{ color: this.state.test33 ? "green" : "red" }}>
              Test 3: {`${this.state.test33}`}
            </span>
          </li>
        </ol>
      </div>
    );
  }
}

export default App;
