import React from 'react';
import Header from '../../components/Header';
import FillImage from '../../components/FillImage';
import A from '../../components/A';
import pages from '../../Pages';
import './styles.css';

const cName = 'NotFoundPage';

const NotFoundPage = () => (
  <div className={cName}>
    <div className={`${cName}__image`}>
      <FillImage />
    </div>

    <div className={`${cName}__text`}>
      <Header className={`${cName}__header`}>Page not found.</Header>

      <A to={pages.home.path} className={`${cName}__home-link`}>
        Home
      </A>
    </div>
  </div>
);

export default NotFoundPage;
