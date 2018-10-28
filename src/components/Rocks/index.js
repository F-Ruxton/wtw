import React from 'react';
import _ from 'lodash/fp';
import Rock1 from './Rock1';
import Rock2 from './Rock2';
import Rock3 from './Rock3';
import Rock4 from './Rock4';
import { isHome } from '../../utils/navigation';
import A from '../A';
import pages from '../Pages';
import './styles.css';

const cName = 'Rock';

const linkOrButtton = (handleClick, to = false) => {
  if (!_.isFunction(handleClick)) {
    return _.isUndefined(to) ? {} : { to };
  }

  return {
    [isHome() ? 'onClick' : 'to']: isHome() ? handleClick : to,
  };
};

export const HomeRock = ({ handleClick, to = pages.home.path }) => (
  <A {...linkOrButtton(handleClick, to)}>
    <div className={cName}>
        <div className={`${cName}__text`} style={{ left: 30 }}>
          Home
        </div>
        <Rock1 style={{ height: 120, width: 110 }} />
    </div>
  </A>
);

export const PortfolioRock = ({ handleClick, to = pages.portfolio.path }) => (
  <A {...linkOrButtton(handleClick, to)}>
    <div className={cName}>
      <div className={`${cName}__text`} style={{ left: 10 }}>
        Portfolio
      </div>
      <Rock2 style={{ height: 100, width: 150 }} />
    </div>
  </A>
);

export const AboutRock = ({ handleClick, to = pages.about.path }) => (
  <A {...linkOrButtton(handleClick, to)}>
    <div className={cName}>
      <div className={`${cName}__text`} style={{ left: 18 }}>
        About
      </div>
      <Rock3 style={{ height: 100, width: 110 }} />
    </div>
  </A>
);

export const ContactRock = ({ handleClick, to = pages.contact.path }) => (
  <A {...linkOrButtton(handleClick, to)}>
    <div className={cName}>
      <div className={`${cName}__text`} style={{ left: 11 }}>
        Contact
      </div>
      <Rock4 style={{ height: 100, width: 120 }} />
    </div>
  </A>
);
