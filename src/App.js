import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hola from './Hola';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Node JS and React</h1>
        </header>
        <p className="App-intro">
          <Hola/>
        </p>
      </div>
    );
  }
}

export default App;
