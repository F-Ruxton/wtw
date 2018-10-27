import React from 'react';
import A from '../A';
import Masthead from '../Masthead';
import { HomeRock, PortfolioRock, AboutRock, ContactRock } from '../Rocks/';
import pages from '../../Pages';
import './styles.css';

const cName = 'Nav';

const Nav = () => (
  <div className={cName}>
    <div className={`${cName}__masthead`}>
      <A to={pages.home.path}><Masthead /></A>
    </div>
    <div className={`${cName}__buttons`}>
      <HomeRock />
      <AboutRock />
      <PortfolioRock />
      <ContactRock />
    </div>
  </div>
);

export default Nav;
