import React, { Component } from 'react';
import { LoginForm } from './LoginForm.js';

class App extends Component {
  render() {
    return (
      <div>
        <h1> Hello Guys..! WELCOME TO AKSHAY'S TODO APP  </h1>
        <br />
        <h4> Login Form </h4>
        <br />
        <LoginForm />
      </div>
    );
  }
}

export default App;
