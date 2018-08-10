import React from 'react';
import Masthead from '../Masthead';
import { HomeRock, PortfolioRock, AboutRock, ContactRock } from '../Rocks/';
import './styles.css';

const cName = 'Nav';

export default function Nav (props) {
  const { handleClick } = props;

  return (
    <div className={cName}>
      <div className={`${cName}__masthead`}>
        <Masthead />
      </div>
      <div className={`${cName}__buttons`}>
        <HomeRock handleClick={handleClick} />
        <PortfolioRock handleClick={handleClick} />
        <AboutRock handleClick={handleClick} />
        <ContactRock handleClick={handleClick} />
      </div>
    </div>
  );
}
