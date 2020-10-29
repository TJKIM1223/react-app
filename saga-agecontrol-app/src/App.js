import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { connect } from "react-redux";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="AppText">Your Age : {this.props.age}</div>
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button onClick={this.props.AgeUp}>Age Up</Button>
          <Button onClick={this.props.AgeDown}>Age Down</Button>
          <Button onClick={this.props.GetTest}>Get Test</Button>
        </ButtonGroup>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    age: state.age,
  };
};

const mapDispachToProps = (dispatch) => {
  return {
    AgeUp: () => dispatch({ type: "AGE_UP", value: 1 }),
    AgeDown: () => dispatch({ type: "AGE_DOWN", value: 1 }),
    GetTest: () => dispatch({ type: "GET_TEST", value: 1 }),
  };
};

export default connect(mapStateToProps, mapDispachToProps)(App);
