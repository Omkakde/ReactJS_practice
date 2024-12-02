// withLoading.js
import React from 'react';

// Higher-Order Component to add loading state
const withLoading = (WrappedComponent) => {
  return function WithLoading({ isLoading, ...props }) {
    // If isLoading is true, show a loading spinner
    if (isLoading) {
      return <div>Loading...</div>;
    }

    // If not loading, render the wrapped component with all other props
    return <WrappedComponent {...props} />;
  };
};

export default withLoading;
