import React, { Component } from 'react';
import _ from 'lodash/fp';
import path from 'path';
import Loadable from 'react-loadable';
import Loading from '../../components/Loading'
import A from '../../components/A';
import { projects, team } from '../../assets/images';
import { getHashSectionFromProps } from '../../utils/navigation';
import aboutSections from '../About/sections';
import routes from '../routes';
import './styles.css';

import ScrollTo from '../../components/ScrollTo';

const cName = 'Home';

export const LANDING = 'LANDING';
export const ABOUT = 'ABOUT';
export const CONTACT = 'CONTACT';

const isHomePageSection = section => _.includes(section, [LANDING, ABOUT, CONTACT]);

const toBackgroundImage = (gradient, image) => _.flow(
    _.compact,
    _.join(','),
)([gradient, `url("${image.src}")`]);

const LinkSection = ({ to, image, linkText, gradient }) => (
  <div
    className={`${cName}__link--ctr`}
    style={{
      backgroundImage: toBackgroundImage(gradient, image),
    }}
  >
    <A to={to} className={`${cName}__link`}>
      <div className={`${cName}__link--text`}>
        { linkText }
      </div>
    </A >
  </div>
);

const links = [
  {
    to: routes.about,
    image: team.group.team_1,
    linkText: 'About Us',
    gradient: 'linear-gradient(55deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5))',
  },
  {
    to: routes.portfolio,
    image: projects.peatys.trail.trail_roller_closeup_1,
    linkText: 'Portfolio'
  },
];

const CLOUDINARY_CLOUD_NAME = 'wtw';

// const getImageUrl = ({
//   resourceType = 'image',
//   type,
//   version,
//   transformations,
//   publicId,
//   format,
// }) => path.join(
//   'https://res.cloudinary.com',
//   CLOUDINARY_CLOUD_NAME,
//   ..._.compact([
//     resourceType,
//     type,
//     version,
//     transformations,
//     publicId,
//     format,
//   ]),
// );

const LoadablePage = Loadable.Map({
  loader: {
    Landing : () => import('../../components/Landing'),
    About   : () => import('../../components/Gallery'),
    Contact : () => import('../../components/Contact'),
  },
  loading: Loading,
  render(loaded, props) {
    const { section } = props;

    const Landing = loaded.Landing.default;
    const Contact = loaded.Contact.default;

    const isHomePageSect = isHomePageSection(section);

    return (
      <React.Fragment>

        <img
          src='https://res.cloudinary.com/wtw/image/upload/v1540653846/projects/peatys/building/rollin_bwd_1LS.jpg'
          style={{ width: 500, maxWidth: '100%', height: 'auto' }}
          title="Click for the larger version."
        />

        <ScrollTo scrollOnMount={isHomePageSect && section === LANDING}>
          <Landing />
        </ScrollTo>

        <div className={`${cName}__about-text`}>
          {aboutSections.company.text}
        </div>

        <div className={`${cName}__links`}>
        { _.map(link => <LinkSection key={link.to} {...link} />, links) }
        </div>

        <ScrollTo scrollOnMount={isHomePageSect && section === CONTACT}>
          <Contact />
        </ScrollTo>

      </React.Fragment>
    );
  },
});

export default class HomePage extends Component {
  render() {
    return (
      <LoadablePage section={getHashSectionFromProps(this.props)} />
    );
  }
}
