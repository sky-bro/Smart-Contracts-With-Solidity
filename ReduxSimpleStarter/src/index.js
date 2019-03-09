import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBo5mC-243igiJ4vijIjWBveM04eaj103k';
// Create a new component, This componnet should produce some html
const App = function() {
  // JSX, like HTML, produce HTML
  return (
      <div>
        <SearchBar/>
      </div>
  )
};
// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
