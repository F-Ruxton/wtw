import React, { Component } from 'react';
import _ from 'lodash/fp';
import * as ReactGallery from 'react-grid-gallery';
import { team, projects } from '../../assets/images';
import './styles.css';

export const GALLERY = 'GALLERY';

const cName = 'Gallery';

const images = _.concat([team.group.team_1], _.shuffle([
  projects.peatys.building.building_berm12_1,
  projects.peatys.building.building_berm1_1,
  projects.peatys.building.building_roller_close_1,
  projects.peatys.building.building_rollin_bwd,
  projects.peatys.building.building_rollin_fwd,
  projects.peatys.chainsaw.chainsaw_felling_1,
  projects.peatys.chainsaw.chainsaw_timber_1,
  projects.peatys.digger.digger_bucket_closeup_1,
  projects.peatys.digger.digger_dirt_falling_closeup_1,
  projects.peatys.digger.digger_fred_james_1,
  projects.peatys.digger.digger_fred_james_2,
  projects.peatys.handsculpt.handsculpt_james_1,
  projects.peatys.handsculpt.handsculpt_james_2,
  projects.peatys.handsculpt.handsculpt_james_rob_1,
  projects.peatys.handsculpt.handsculpt_rob_1,
  projects.peatys.trail.trail_berms_1,
  projects.peatys.trail.trail_roller_closeup_1,
  team.kk.kk_1,
  team.rob.rob_dirt_throw_1,
  team.rob.rob_slapping_1,
  team.james.james_slapping_1,
  team.james.james_watering_1,
]));

const galleryImages = _.map(image => ({
  src: image.src,
  thumbnail: image.src,
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
