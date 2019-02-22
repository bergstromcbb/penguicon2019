import React, { Component } from 'react';
import { Header } from "./components/Header";
import './App.css';
import './css/set1.css';
import './css/set2.css';
import './css/demo.css';
import './css/normalize.css';
import './component.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
