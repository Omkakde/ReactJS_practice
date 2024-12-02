import React, { Component } from 'react';

class LifecycleExample extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('1. Constructor');
  }

  // Mounting: Called before the component is mounted
  static getDerivedStateFromProps(nextProps, nextState) {
    console.log('2. getDerivedStateFromProps');
    return null; // Return updated state or null to indicate no update
  }

  // Mounting: Called after the component is mounted
  componentDidMount() {
    console.log('4. componentDidMount');
    // You can use this lifecycle method to simulate `useEffect` in class components.
    // Example: Fetching data or setting up event listeners.
  }

  // Updating: Called before re-render when state or props change
  shouldComponentUpdate(nextProps, nextState) {
    console.log('5. shouldComponentUpdate');
    return true; // Return true to allow the update
  }

  // Updating: Called before rendering the updates
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('6. getSnapshotBeforeUpdate');
    return null; // Optionally return a value to pass to `componentDidUpdate`
  }

  // Updating: Called after the component has been updated
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('7. componentDidUpdate');
    // Simulating `useEffect` after the component update.
  }

  // Unmounting: Called before the component is removed
  componentWillUnmount() {
    console.log('8. componentWillUnmount');
    // Cleanup resources here, such as canceling network requests or clearing timers
  }

  // Error Handling: Called when an error occurs in the component
  componentDidCatch(error, info) {
    console.log('Error occurred:', error);
    // This is where you handle errors during component rendering.
  }

  // Event Handler to trigger an update
  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log('3. Render');
    return (
      <div>
        <h1>React Lifecycle Example (Class Component)</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

export default LifecycleExample;
