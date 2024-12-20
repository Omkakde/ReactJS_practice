import React, { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  render() {
    if (this.state.hasError) {
      // Return fallback UI when an error occurs
      return <h1>Something went wrong</h1>;
    }
    // Return children if no error
    return this.props.children;
  }
}

export default ErrorBoundary;
