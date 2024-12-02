import React, { useState } from 'react';

const EventHandling = () => {
  const [text, setText] = useState('');
  const [keyPressMessage, setKeyPressMessage] = useState('');
  const [mouseHoverMessage, setMouseHoverMessage] = useState('');

  // Handle Mouse Enter Event
  const handleMouseEnter = () => {
    setMouseHoverMessage('Mouse entered!');
  };

  // Handle Mouse Leave Event
  const handleMouseLeave = () => {
    setMouseHoverMessage('Mouse left!');
  };

  // Handle Key Press Event
  const handleKeyPress = (event) => {
    setKeyPressMessage(`You pressed: ${event.key}`);
  };

  // Handle Form Input Change Event
  const handleChange = (event) => {
    setText(event.target.value);
  };

  // Handle Submit Event
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form Submitted: ' + text);
  };

  // Custom Event Handler
  const customEventHandler = () => {
    alert('Custom Event Triggered!');
  };

  return (
    <div>
      {/* Mouse Events */}
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ padding: '20px', border: '1px solid black' }}
      >
        Hover over this box: {mouseHoverMessage}
      </div>

      {/* Keyboard Event */}
      <input
        type="text"
        onKeyPress={handleKeyPress}
        placeholder="Press a key"
        style={{ marginTop: '20px' }}
      />
      <p>{keyPressMessage}</p>

      {/* Form Events */}
      <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
        <input
          type="text"
          value={text}
          onChange={handleChange}  {/* Correct usage of onChange */}
          placeholder="Enter text"
        />
        <button type="submit">Submit</button>
      </form>

      {/* Custom Event */}
      <button onClick={customEventHandler} style={{ marginTop: '20px' }}>
        Trigger Custom Event
      </button>
    </div>
  );
};

export default EventHandling;
