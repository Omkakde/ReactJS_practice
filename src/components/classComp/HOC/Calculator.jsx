import React, { Component } from "react";

const Calculator = (WrappedComponent, methodsToInject) => {

  class CalculatorHOC extends Component {
    constructor(props) {
      super(props);
      this.state = {
        a: 0,
        b: 0,
        result: 0,
      };
    }

    handleInputChange = (e) => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
    };

    add = () => {
      const { a, b } = this.state;
      this.setState({ result: Number(a) + Number(b) });
    };

    subtract = () => {
      const { a, b } = this.state;
      this.setState({ result: Number(a) - Number(b) });
    };

    multiply = () => {
      const { a, b } = this.state;
      this.setState({ result: Number(a) * Number(b) });
    };

    divide = () => {
      const { a, b } = this.state;
      if (b === "0") {
        alert("Cannot divide by zero!");
        return;
      }
      this.setState({ result: Number(a) / Number(b) });
    };

    render() {
      const { a, b, result } = this.state;

      // Create an object with only the methods to inject
      const injectedProps = {};
      methodsToInject.forEach((methodName) => {
        if (this[methodName]) {
          injectedProps[methodName] = this[methodName];
        }
      });

      return (
        <WrappedComponent
          a={a}
          b={b}
          result={result}
          handleInputChange={this.handleInputChange}
          
        />
      );
    }
  }

  return CalculatorHOC;
};

export default Calculator;
