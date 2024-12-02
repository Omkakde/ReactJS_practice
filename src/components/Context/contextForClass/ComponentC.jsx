import React, { Component } from "react";
import UserContext from "./Context";

export class ComponentC extends Component {
  static contextType = UserContext;

  render() {
    return (
      <div>
        <h1>Hello, {this.context}!</h1>
      </div>
    );
  }
}

export default ComponentC;
