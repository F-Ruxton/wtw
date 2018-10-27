import React, { Component } from 'react';
import _ from 'lodash/fp';
import Slider, { lazyLoadSettings } from '../../components/Slider';
import FillImage from '../../components/FillImage';
import Header from '../../components/Header';
import { team, projects } from '../../assets/images';
import { getHeightOffset } from '../../styles/utils';
import scssConstants from '../../styles/constants';
import WheelSelector from '../../components/WheelSelector';
import './styles.css';

export const PORTFOLIO = 'PORTFOLIO';

const cName = 'Portfolio';

const images = _.shuffle([
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
]);

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
            { _.map(image => (
              <FillImage
                key={image.alt}
                image={image}
                heightOffset={heightOffset}
              />), images) }
          </Slider>
        </div>
      </div>
    );
  }
}

export default Portfolio;
