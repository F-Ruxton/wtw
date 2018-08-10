import React from 'react';
import classnames from 'classnames';
import Logo from '../Logo';
import { MEDIUM, X_LARGE } from '../../shared/sizes';
import './styles.css';

const cName = 'Loading';

export default function Loading (props) {
  const {
    size = MEDIUM,
  } = props;

  return (
    <div className={cName}>
      <Logo size={X_LARGE} />
    </div>
  );
}
