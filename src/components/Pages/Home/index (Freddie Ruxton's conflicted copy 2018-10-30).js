import React, { Component } from 'react';
import _ from 'lodash/fp';
import Loadable from 'react-loadable';
import Loading from '../../Loading'
import A from '../../A';
import { getHashSectionFromProps } from '../../../utils/navigation';
import aboutSections from '../About/sections';
import routes from '../routes';
import { Image } from 'cloudinary-react';
import ScrollTo from '../../ScrollTo';
import './styles.css';

const cName = 'Home';

export const LANDING = 'LANDING';
export const ABOUT = 'ABOUT';
export const CONTACT = 'CONTACT';

const isHomePageSection = section => _.includes(section, [LANDING, ABOUT, CONTACT]);

const toBackgroundImage = (gradient, image) => _.flow(
    _.compact,
    _.join(','),
)([gradient, `url("${image.src}")`]);

const LinkSection = ({ to, imagePublicId, linkText, gradient }) => (
  <div className={`${cName}__link--ctr`}>
    <A to={to} className={`${cName}__link`}>
      <Image
        className={`${cName}__link--img`}
        publicId={imagePublicId}
      />
      <div className={`${cName}__link--text`}>
        { linkText }
      </div>
    </A >
  </div>
);

const links = [
  {
    to: routes.about,
    imagePublicId: 'team/group/team_1.jpg',
    linkText: 'About Us',
    gradient: 'linear-gradient(55deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5))',
  },
  {
    to: routes.portfolio,
    imagePublicId: 'projects/peatys/trail/roller_closeup_1.jpg',
    linkText: 'Portfolio'
  },
  {
    to: routes.contact,
    imagePublicId: 'projects/peatys/trail/roller_closeup_1.jpg',
    linkText: 'Contact'
  },
];

const LoadablePage = Loadable.Map({
  loader: {
    Landing : () => import('../../Landing'),
  },
  loading: Loading,
  render(loaded, props) {
    const Landing        = loaded.Landing.default;
    const { section }    = props;
    const isHomePageSect = isHomePageSection(section);

    return (
      <React.Fragment>

        <ScrollTo scrollOnMount={isHomePageSect && section === LANDING}>
          <Landing />
        </ScrollTo>

        <div className={`${cName}__about-text`}>
          {aboutSections.company.text}
        </div>

        <div className={`${cName}__links`}>
        { _.map(link => <LinkSection key={link.to} {...link} />, links) }
        </div>

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
