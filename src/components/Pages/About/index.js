import React, { Component } from 'react';
import _ from 'lodash/fp';
import Team from './team';
import sections from './sections';
import Gallery from '../../Gallery';
import Header from '../../Header';
import './styles.css';

export const ABOUT = 'ABOUT';

const cName = 'About';

class About extends Component {
  render() {
    return (
      <div className={cName}>

        <Header>About Us</Header>

        <div className={`${cName}__gallery`}>
          <Gallery />
        </div>

        <div className={`${cName}__text-sections`}>
          { _.map(({ heading, text }) => (
              <div key={heading} className={`${cName}__text-sections--section`}>
                { !_.eq(heading, 'About Us') && (
                  <h1 className={`${cName}__heading`}>
                    {heading}
                  </h1>
                ) }

                {text}
              </div>
            ), sections) }
        </div>

        <Team />
      </div>
    );
  }
}

export default About;
