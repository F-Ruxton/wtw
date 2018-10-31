import React, { Component } from 'react';
import _ from 'lodash/fp';
import { fetchImage } from '../../utils/images';

export default function ImageFetch(requestList, Compt) {
  return class ImageFetchComponent extends Component {
    constructor() {
      super();
      this.state = { images: {} };
    }

    async componentDidMount() {
      this.getImages();
    }

    async getImages() {
      requestList.forEach(async imgRequest => {
        const image = await fetchImage(imgRequest);

        this.setImage(imgRequest.name, image);
      });
    }

    setImage(name, img) {
      if (_.isUndefined(img)) { return; }

      const { images: oldImages } = this.state;
      const images = _.merge(oldImages, { [name]: img });

      this.setState({ images });
    }

    render() {
      const { props, state } = this;

      return <Compt {...props} {...state} />;
    }
  }
}
