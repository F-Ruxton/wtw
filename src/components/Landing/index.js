import React, { Component } from 'react';
import _ from 'lodash/fp';
import { Image } from 'cloudinary-react';
import FillImage from '../FillImage';
import './styles.css';
import Loading from '../Loading';

const cName = 'Landing';

class Landing extends Component {
  render() {
    const { img } = this.props;

    return _.isEmpty(img)
      ? <Loading />
      : (
      <div className={cName}>
        <FillImage
          className={`${cName}__img`}
          image={{ src: img.url }}
        />
      </div>
    );
  }
}

export default Landing;
