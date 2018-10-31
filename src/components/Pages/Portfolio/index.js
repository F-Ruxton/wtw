import React, { Component } from 'react';
import _ from 'lodash/fp';
import { Image } from 'cloudinary-react';
import Slider, { lazyLoadSettings } from '../../Slider';
import FillImage from '../../FillImage';
import Header from '../../Header';
import { getHeightOffset } from '../../../styles/utils';
import scssConstants from '../../../styles/constants';
import WheelSelector from '../../WheelSelector';
import './styles.css';

export const PORTFOLIO = 'PORTFOLIO';

const cName = 'Portfolio';

const images = _.shuffle([
  'projects/peatys/building/building_berm12_1.jpg',
  'projects/peatys/building/building_berm1_1.jpg',
  'projects/peatys/building/building_roller_close_1.jpg',
  'projects/peatys/building/building_rollin_bwd.jpg',
  'projects/peatys/building/building_rollin_fwd.jpg',
  'projects/peatys/chainsaw/chainsaw_felling_1.jpg',
  'projects/peatys/chainsaw/chainsaw_timber_1.jpg',
  'projects/peatys/digger/digger_bucket_closeup_1.jpg',
  'projects/peatys/digger/digger_dirt_falling_closeup_1.jpg',
  'projects/peatys/digger/digger_fred_james_1.jpg',
  'projects/peatys/digger/digger_fred_james_2.jpg',
  'projects/peatys/handsculpt/handsculpt_james_1.jpg',
  'projects/peatys/handsculpt/handsculpt_james_2.jpg',
  'projects/peatys/handsculpt/handsculpt_james_rob_1.jpg',
  'projects/peatys/handsculpt/handsculpt_rob_1.jpg',
  'projects/peatys/trail/trail_berms_1.jpg',
  'projects/peatys/trail/trail_roller_closeup_1.jpg',
  'team/kk/kk_1.jpg',
  'team/rob/rob_dirt_throw_1.jpg',
  'team/rob/rob_slapping_1.jpg',
  'team/james/james_slapping_1.jpg',
  'team/james/james_watering_1.jpg',
]);

// const { cloudName, onPhotosFetched } = this.props;
// const photos = await fetchPhotos(cloudName);
// const availableResources = await resources();
// onPhotosFetched(photos);

class Portfolio extends Component {
  render() {
    const heightOffset = getHeightOffset([
      scssConstants["$section-padding"],
      scssConstants["$header-height"],
      50
    ]);

    return (
      <div className={cName}>
        <Header>Portfolio</Header>

        <WheelSelector />

        <div className={`${cName}__gallery`}>
          <Slider settings={lazyLoadSettings}>
            { _.map(imagePublicId => (
              <Image key={imagePublicId} publicId={imagePublicId} />), images) }
          </Slider>
        </div>
      </div>
    );
  }
}

export default Portfolio;
