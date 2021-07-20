import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout'
class App extends Component {

  constructor() {
    super();
    this.state = {
        value: ''
    };
  }
  render() {
    return (
      <Layout />
    );
  }
}

export default App;
