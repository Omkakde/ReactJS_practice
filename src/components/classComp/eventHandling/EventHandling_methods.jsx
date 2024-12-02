import React, { Component } from 'react';

class EventHandlingMethods extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      keyPressMessage: '',
      mouseHoverMessage: '',
    };
  }

  // Handle Mouse Enter Event
  handleMouseEnter = () => {
    this.setState({ mouseHoverMessage: 'Mouse entered!' });
  };

  // Handle Mouse Leave Event
  handleMouseLeave = () => {
    this.setState({ mouseHoverMessage: 'Mouse left!' });
  };

  // Handle Key Press Event
  handleKeyPress = (event) => {
    this.setState({ keyPressMessage: `You pressed: ${event.key}` });
  };

  // Handle Form Input Change Event
  handleChange = (event) => {
    this.setState({ text: event.target.value });
  };

  // Handle Submit Event
  handleSubmit = (event) => {
    event.preventDefault();
    alert('Form Submitted: ' + this.state.text);
  };

  // Custom Event Handler
  customEventHandler = () => {
    alert('Custom Event Triggered!');
  };

  render() {
    return (
      <div>
        {/* Mouse Events */}
        <div
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          style={{ padding: '20px', border: '1px solid black' }}
        >
          Hover over this box: {this.state.mouseHoverMessage}
        </div>

        {/* Keyboard Event */}
        <input
          type="text"
          onKeyPress={this.handleKeyPress}
          placeholder="Press a key"
          style={{ marginTop: '20px' }}
        />
        <p>{this.state.keyPressMessage}</p>

        {/* Form Events */}
        <form onSubmit={this.handleSubmit} style={{ marginTop: '20px' }}>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleChange}  {/* Correct usage of onChange */}
            placeholder="Enter text"
          />
          <button type="submit">Submit</button>
        </form>

        {/* Custom Event */}
        <button onClick={this.customEventHandler} style={{ marginTop: '20px' }}>
          Trigger Custom Event
        </button>
      </div>
    );
  }
}

export default EventHandlingMethods;
