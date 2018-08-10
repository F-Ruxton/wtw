import React, { Component } from 'react';
import Nav from '../components/Nav';
import Home from '../Home';
import Portfolio from '../Portfolio';
import About from '../About';
import Contact from '../Contact';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Home />
        <Portfolio />
        <About />
        <Contact />
      </div>
    );
  }
}

export default App;
