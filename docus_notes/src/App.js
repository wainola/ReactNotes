import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dialog from './components/dialog'
import Message from './components/classMessage'
import Signin from './components/Composition/Signin'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Dialog title={'Object destructuring'} message={'object destructuring in javascript is awesome!'} />
        <Message name={'Nicolas Riquelme'} edad={30} objects={[1,2,3, {valor: 'val1'}]} />
        <br/>
        <hr/>
        <Signin />
      </div>
    );
  }
}

export default App;
