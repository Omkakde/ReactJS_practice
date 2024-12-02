import React, { useState, useEffect } from 'react';

function LifecycleExample() {
  const [count, setCount] = useState(0);

  // Runs once after the component mounts (like componentDidMount)
  useEffect(() => {
    console.log('Component mounted!');
    
    // Cleanup function runs just before the component unmounts
    return () => {
      console.log('Component will unmount!');
    };
  }, []);  // Empty array means it only runs once after mount

  // Runs every time the count changes (like componentDidUpdate)
  useEffect(() => {
    console.log('Count changed:', count);
  }, [count]);  // Runs when count changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default LifecycleExample;
