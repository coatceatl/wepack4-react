console.log('webpack 4 + react');

import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return <h1>Hello from React</h1>
}

ReactDOM.render(
  <App />, document.getElementById('root')
);
