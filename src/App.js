import React, { Component } from 'react';
import SignInForm from './SignInForm.js';
import './App.scss';
import logo from './logo.svg';

class App extends Component {

  render() {
    return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <SignInForm />
          <p>Not yet registered? <Link to="/create">Register Now</Link></p>
        </div>
    );
  }
}

export default App;
