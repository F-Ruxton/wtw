import React, { Component } from 'react';
import _ from 'lodash/fp';
import { Image } from 'cloudinary-react';
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
        <Image
          className={`${cName}__img`}
          publicId={img.public_id}
        />
      </div>
    );
  }
}

export default Landing;
