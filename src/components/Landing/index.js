import React, { Component } from 'react';
import FillImage from '../FillImage';
import { projects } from '../../assets/images';
import './styles.css';

const cName = 'Landing';

class Landing extends Component {
  render() {
    return (
      <div className={cName}>
        <FillImage
          className={`${cName}__img`}
          withBorder={false}
          image={projects.peatys.trail.trail_berms_1}
        />
      </div>
    );
  }
}

export default Landing;
