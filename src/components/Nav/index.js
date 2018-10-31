import React, { Component } from 'react';
import _ from 'lodash/fp';
import classNames from 'classnames';
import A from '../A';
import Image from '../Image';
import Masthead from '../Masthead';
import { HomeRock, PortfolioRock, AboutRock, ContactRock } from '../Rocks/';
import pages from '../Pages';
import routes from '../Pages/routes';
import { icons } from '../../assets/images'
import './styles.css';

const cName = 'Nav';

const siteLinks = [
  [routes.home,      'Home'],
  [routes.about,     'About'],
  [routes.portfolio, 'Portfolio'],
  [routes.contact,   'Contact'],
];

const SiteLinks = ({ onClick }) => (
  <div className={`${cName}__link--ctr`} onClick={onClick}>
    { _.map(([to, text]) => (
      <div className={`${cName}__link--link`} key={to}>
        <A to={to}>{text}</A>
      </div>
    ), siteLinks) }
  </div>
);

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      menuOpen: false,
    }
    this.toggleFocus = this.toggleFocus.bind(this);
  }

  toggleFocus() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  render() {
    return (
      <div className={cName}>
        <div className={`${cName}__wrapper`}>
        <div className={`${cName}__masthead`}>
          <A to={pages.home.path}><Masthead /></A>
        </div>

        <div className={`${cName}__dropdown`}>
          <div
            className={`${cName}__dropdown--icon`}
            onClick={this.toggleFocus}
          >
            <Image
              image={icons.menu}
              withBorder={false}
              style={{ height: 30 }}
            />
          </div>
          <div className={classNames(
              `${cName}__dropdown-menu`,
              { [`${cName}__dropdown-menu--open`]: this.state.menuOpen },
            )}>
            <SiteLinks onClick={this.toggleFocus} />
          </div>
        </div>

        <div className={`${cName}__buttons`}>
          <HomeRock />
          <AboutRock />
          <PortfolioRock />
          <ContactRock />
        </div>
        </div>
      </div>
    );
  }
}

export default Nav;
