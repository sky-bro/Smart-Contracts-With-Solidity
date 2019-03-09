import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component, This componnet should produce some html
const App = function() {
  // JSX, like HTML, produce HTML
  return <div>Hi!</div>;
};
// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
