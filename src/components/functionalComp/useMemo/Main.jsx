import React, { useState, useMemo } from 'react';

const Main = () => {
  const [count, setCount] = useState(0); // State for number
  const [theme, setTheme] = useState('light'); // State for theme

  // Expensive calculation
  const doubleNumber = useMemo(() => {
    console.log('Calculating double...');
    return count * 2;
  }, [count]); // Recalculates only if "count" changes

  // Theme styles
  const themeStyles = {
    backgroundColor: theme === 'dark' ? '#333' : '#fff',
    color: theme === 'dark' ? '#fff' : '#000',
  };

  return (
    <div style={themeStyles}>
      <h1>Count: {count}</h1>
      <h2>Double: {doubleNumber}</h2>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </div>
  );
};

export default Main;
