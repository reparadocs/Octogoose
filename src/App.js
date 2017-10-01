import React, { Component } from 'react';
import Planet from './Planet.js';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div style={{margin: 10}}>
      <MuiThemeProvider style={{margin: 100}}>
      <Planet style={{margin: 100}}/>
      </MuiThemeProvider>
      </div>
      </div>
    );
  }
}

export default App;
