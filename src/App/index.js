import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import SwitchRouter from '../Pages/routing/SwitchRouter';
import pages from '../Pages';
import './styles.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <SwitchRouter pages={pages} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
