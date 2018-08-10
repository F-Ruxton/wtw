import React from 'react';
import Rock1 from './Rock1';
import Rock2 from './Rock2';
import Rock3 from './Rock3';
import Rock4 from './Rock4';
import  { HOME, PORTFOLIO, ABOUT, CONTACT } from '../../App';
import './styles.css';

const cName = 'Rock';

export const HomeRock = props => {
  const {
    handleClick
  } = props;

  return (
    <div className={cName}>
      <div
        className={`${cName}__text`}
        style={{ left: 30 }}
      >
        Home
      </div>
      <Rock1
        handleClick={handleClick(HOME)}
        style={{
          height: 120,
          width: 110,
        }}
      />
    </div>
  );
}
export const PortfolioRock = props => {
  const {
    handleClick
  } = props;

  return (
    <div className={cName}>
      <div
        className={`${cName}__text`}
        style={{ left: 10 }}
      >
        Portfolio
      </div>
      <Rock2
        handleClick={handleClick(PORTFOLIO)}
        style={{
          height: 100,
          width: 150,
        }}
       />
    </div>
  );
}
export const AboutRock = props => {
  const {
    handleClick
  } = props;

  return (
    <div className={cName}>
      <div
        className={`${cName}__text`}
        style={{ left: 18 }}
      >
        About
      </div>
      <Rock3
        handleClick={handleClick(ABOUT)}
        style={{
          height: 100,
          width: 110,
        }}
       />
    </div>
  );
}
export const ContactRock = props => {
  const {
    handleClick
  } = props;

  return (
    <div className={cName}>
      <div
        className={`${cName}__text`}
        style={{ left: 11 }}
      >
        Contact
      </div>
      <Rock4
        handleClick={handleClick(CONTACT)}
        style={{
          height: 100,
          width: 120,
        }}
       />
    </div>
  );
}
