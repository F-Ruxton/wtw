import React, { Component } from 'react';
import Nav from './components/Nav';
import Home from './Home';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Home />
        <Portfolio />
        <About />
        <Contact />

        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
