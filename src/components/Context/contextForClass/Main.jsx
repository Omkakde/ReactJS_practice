import React, { Component } from "react";
import ComponentC from "./ComponentC";
import { UserProvider } from "./Context";

class Main extends Component {
  render() {
    return (
      <div>
        <UserProvider value="Om Kakde">
          <ComponentC />
        </UserProvider>
      </div>
    );
  }
}

export default Main;
