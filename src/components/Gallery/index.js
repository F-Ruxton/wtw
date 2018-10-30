import React, { Component } from 'react';
import _ from 'lodash/fp';
import * as ReactGallery from 'react-grid-gallery';
import './styles.css';

export const GALLERY = 'GALLERY';

const cName = 'Gallery';

const images = _.concat(
  ['team/group/team_1.jpg'],
  _.shuffle([
    'projects/peatys/building/berm12_1.jpg',
    'projects/peatys/building/berm1_1.jpg',
    'projects/peatys/building/roller_close_1.jpg',
    'projects/peatys/building/rollin_bwd.jpg',
    'projects/peatys/building/rollin_fwd.jpg',
    'projects/peatys/chainsaw/felling_1.jpg',
    'projects/peatys/chainsaw/timber_1.jpg',
    'projects/peatys/digger/bucket_closeup_1.jpg',
    'projects/peatys/digger/dirt_falling_closeup_1.jpg',
    'projects/peatys/digger/fred_james_1.jpg',
    'projects/peatys/digger/fred_james_2.jpg',
    'projects/peatys/handsculpt/james_1.jpg',
    'projects/peatys/handsculpt/james_2.jpg',
    'projects/peatys/handsculpt/james_rob_1.jpg',
    'projects/peatys/handsculpt/rob_1.jpg',
    'projects/peatys/trail/berms_1.jpg',
    'projects/peatys/trail/roller_closeup_1.jpg',
    'team/kk/kk_1.jpg',
    'team/rob/rob_dirt_throw_1.jpg',
    'team/rob/rob_slapping_1.jpg',
    'team/james/james_slapping_1.jpg',
    'team/james/james_watering_1.jpg',
  ]),
);

const galleryImages = _.map(image => ({
  src: 'https://res.cloudinary.com/wtw/image/upload/' + image,
  thumbnail: 'https://res.cloudinary.com/wtw/image/upload/' + image,
  thumbnailHeight: 240,
  thumbnailWidth: 240,
}), images);

class Gallery extends Component {
  render() {
    return (
      <div className={cName}>
        <ReactGallery  images={galleryImages} />
        <div className={`${cName}__buffer`} />
      </div>
    );
  }
}

export default Gallery;
