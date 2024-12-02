import React, { Component } from 'react';

export class ConditionalRendering extends Component {
  constructor() {
    super();

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    // 1. Using if-else (not directly inside JSX)
    let message;
    if (this.state.isLoggedIn) {
      message = <h1>Welcome User</h1>;
    } else {
      message = <h1>Please Log In</h1>;
    }

    return (
      <div>
        {/* 1. If-Else Outside JSX */}
        {message}

        {/* 2. Ternary Operator */}
        {this.state.isLoggedIn ? (
          <h2>You are logged in</h2>
        ) : (
          <h2>You are not logged in</h2>
        )}

        {/* 3. Short-Circuit Operator (&&) */}
        {this.state.isLoggedIn && <h3>This is shown only when logged in</h3>}

        {/* 4. Inline Conditional Logic */}
        <h4>
          {this.state.isLoggedIn
            ? 'Inline: Logged In'
            : 'Inline: Not Logged In'}
        </h4>
      </div>
    );
  }
}

export default ConditionalRendering;
