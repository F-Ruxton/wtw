import React from 'react';
import Rock1 from './Rock1';
import Rock2 from './Rock2';
import Rock3 from './Rock3';
import Rock4 from './Rock4';
import pages from '../Pages';
import A     from '../A';
import './styles.css';

const cName = 'Rock';

export const svgLayer  = 'rock-svg';
export const cNameLine = 'rock-line';
export const cNameFill = 'rock-fill';
export const cNameText = 'rock-text';

const Rock = ({ to, children }) => <A to={to}><div className={cName}>{children}</div></A>;

export const HomeRock      = ({ to = pages.home.path })      => <Rock to={to}><Rock1 /></Rock>;
export const AboutRock     = ({ to = pages.about.path })     => <Rock to={to}><Rock2 /></Rock>;
export const PortfolioRock = ({ to = pages.portfolio.path }) => <Rock to={to}><Rock3 /></Rock>;
export const ContactRock   = ({ to = pages.contact.path })   => <Rock to={to}><Rock4 /></Rock>;
