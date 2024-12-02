import React, { useState } from 'react';

function ConditionalRendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Toggle login state
  const toggleLogin = () => setIsLoggedIn(!isLoggedIn);

  return (
    <div>
      {/* 1. If-Else (Using Variable Outside JSX) */}
      {(() => {
        if (isLoggedIn) {
          return <h1>Welcome User</h1>;
        } else {
          return <h1>Please Log In</h1>;
        }
      })()}

      {/* 2. Ternary Operator */}
      {isLoggedIn ? (
        <h2>You are logged in</h2>
      ) : (
        <h2>You are not logged in</h2>
      )}

      {/* 3. Short-Circuit Operator (&&) */}
      {isLoggedIn && <h3>Welcome Back!</h3>}

      {/* 4. Inline Conditional Logic */}
      <h4>
        {isLoggedIn ? 'Inline: Logged In' : 'Inline: Not Logged In'}
      </h4>

      {/* Toggle Button */}
      <button onClick={toggleLogin}>
        {isLoggedIn ? 'Log Out' : 'Log In'}
      </button>
    </div>
  );
}

export default ConditionalRendering;
