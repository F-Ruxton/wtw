import React, { Component } from 'react';
import Nav from '../components/Nav';
import Home from '../Home';
import Portfolio from '../Portfolio';
import About from '../About';
import Contact from '../Contact';
import Loading from '../components/Loading';
import { NAVBAR_HEIGHT } from '../shared/sizes';
import './styles.css';

const loading = false;

export const HOME      = 'HOME';
export const PORTFOLIO = 'PORTFOLIO';
export const ABOUT     = 'ABOUT';
export const CONTACT   = 'CONTACT';

class App extends Component {
  constructor () {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(elem) {
    console.log('handle click');
    console.log(this);

    return () => {
      console.log('handle click inner');
      console.log(this);
      console.log(this[elem]);

      // this[elem].scrollIntoView();
      const elementTop = this[elem].offsetTop;
      window.scrollTo({
        top: elementTop - NAVBAR_HEIGHT,
        behavior: 'smooth',
      });
    }
  }

  render() {
    const { handleClick } = this;

    return (
      <div className="App">
        { loading ? <Loading /> : (
          <React.Fragment>
            <Nav handleClick={handleClick} />
            <div ref={node => this[HOME] = node} >
              <Home />
            </div>
            <div ref={node => this[PORTFOLIO] = node} >
              <Portfolio />
            </div>
            <div ref={node => this[ABOUT] = node} >
              <About />
            </div>
            <div ref={node => this[CONTACT] = node} >
              <Contact />
            </div>
          </React.Fragment>
        ) }
      </div>
    );
  }
}

export default App;
{/* <Home ref={elem => { this.home = elem }} />
            <Portfolio ref={elem => { this.portfolio = elem }} />
            <About ref={elem => { this.about = elem }} />
            <Contact ref={elem => { this.contact = elem }} /> */}
