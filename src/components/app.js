import React from 'react';
import { Component } from 'react';
import Header from './header';

// { this.props.children } is from react-router; essentially if app component has any children and a user visits a route that matches up to those children, app will show those children
export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        { this.props.children }
      </div>
    );
  }
}
