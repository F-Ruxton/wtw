import React, { Component } from 'react';
import { Image } from 'cloudinary-react';
import './styles.css';

const cName = 'Landing';

const imgPublicId = "projects/peatys/trail/berms_1LB.jpg";

class Landing extends Component {
  render() {
    return (
      <div className={cName}>
        <Image
          className={`${cName}__img`}
          publicId={imgPublicId}
        />
      </div>
    );
  }
}

export default Landing;
