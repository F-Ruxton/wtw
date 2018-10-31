import React, { Component } from 'react';
import Header from '../../Header';
import ProjectSelector from '../../ProjectSelector';
import './styles.css';

export const PORTFOLIO = 'PORTFOLIO';

const cName = 'Portfolio';

class Portfolio extends Component {
  render() {
    return (
      <div className={cName}>
        <Header>Portfolio</Header>

        <ProjectSelector />
      </div>
    );
  }
}

export default Portfolio;
