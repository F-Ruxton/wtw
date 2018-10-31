import React, { Component } from 'react';
import _ from 'lodash/fp';
import Landing from '../../Landing';
import { fetchImageByTag } from '../../../utils/images';
import aboutSections from '../About/sections';
import routes from '../routes';
import ScrollTo from '../../ScrollTo';
import LinkImage from '../../LinkImage';
import './styles.css';

const cName = 'Home';

export const LANDING = 'LANDING';
export const ABOUT = 'ABOUT';
export const CONTACT = 'CONTACT';

const isHomePageSection = section => _.includes(section, [LANDING, ABOUT, CONTACT]);

export const landingImageTags = {
  landing_main      : 'landing_main',
  landing_about     : 'landing_about',
  landing_portfolio : 'landing_portfolio',
  landing_contact   : 'landing_contact',
};
const { landing_main, landing_about, landing_portfolio, landing_contact } = landingImageTags;

const links = [
  {
    to: routes.about,
    imageTag: landing_about,
    linkText: 'About Us',
    gradient: 'linear-gradient(55deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5))',
  },
  {
    to: routes.portfolio,
    imageTag: landing_portfolio,
    linkText: 'Portfolio'
  },
  {
    to: routes.contact,
    imageTag: landing_contact,
    linkText: 'Contact'
  },
];

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      images: {
        landing_main     : undefined,
        landing_about    : undefined,
        landing_portfolio: undefined,
        landing_contact  : undefined,
      },
    };
  }

  async componentDidMount() {
    this.getImages();
  }

  async getImages() {
    this.setImage(landing_main,      await fetchImageByTag(landing_main));
    this.setImage(landing_about,     await fetchImageByTag(landing_about));
    this.setImage(landing_portfolio, await fetchImageByTag(landing_portfolio));
    this.setImage(landing_contact,   await fetchImageByTag(landing_contact));
  }

  setImage(name, img) {
    if (_.isUndefined(img)) { return; }

    const { images: oldImages } = this.state;
    const images = _.merge(oldImages, { [name]: img });

    this.setState({ images });
  }

  render() {
    const { section }    = this.props;
    const isHomePageSect = isHomePageSection(section);
    const { images }     = this.state;
    const { landing_main }    = images;
    const linksWithImgs  = _.map(link => ({ ...link, img: images[link.imageTag] }), links);

    return (
      <React.Fragment>

        <ScrollTo scrollOnMount={isHomePageSect && section === LANDING}>
          <Landing img={landing_main} />
        </ScrollTo>

        <div className={`${cName}__about-text`}>
          {aboutSections.company.text}
        </div>

        <div className={`${cName}__links`}>
          { _.map(link => <LinkImage key={link.to} {...link} />, linksWithImgs) }
        </div>

      </React.Fragment>
    );
  };
}
