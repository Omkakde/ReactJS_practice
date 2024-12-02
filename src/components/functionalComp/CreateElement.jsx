// import React from 'react';

// function CreateElement() {
//   return React.createElement(
//     'div',
//     null,
//     React.createElement('h1', null, 'Good morning')
//   );
// }

// export default CreateElement;


import React from 'react';

function CreateElement() {
  return React.createElement(
    'div',
    { id: 'container', className: 'container-class' },
    [
      React.createElement('h1', { key: '1', id: 'title' }, 'Good morning'),
      React.createElement('h2', { key: '2' , className: 'main' }, 'Have a great day!'),
      React.createElement('p', { key: '3' }, 'This is an example of multiple elements.')
    ]
  );
}

export default CreateElement;


