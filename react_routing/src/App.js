/*
This component maps the urls into an object. 
*/

import React, { Component } from 'react';
import Router from './components/router'

const mapping = {
  '#profile': <div>Profile ( <a href="#">home</a> )</div>,
  '#accounts': <div>Accounts ( <a href="#">home</a> )</div>,
  '*': <div>
    Dashboard <br/>
    <a href="#profile">Profile</a>
    <a href="#accounts">Accounts</a>
  </div>
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Router</h1>
        <Router mapping = {mapping} />
      </div>
    );
  }
}

export default App;
