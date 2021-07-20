import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';


export default class Layout extends Component {

  constructor() {
    super();
    this.state = {
        value: ''
    };
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
        <Footer /> 
      </div>
    );
  }
}