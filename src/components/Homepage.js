import React, { Component } from 'react'
import Header from './Header';
import Home from './Home';

export class Homepage extends Component {
  render() {
    return (
      <div>
          <Header />
          <Home/>
        
      </div>
    )
  }
}

export default Homepage
