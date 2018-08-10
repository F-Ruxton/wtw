import React from 'react';
import Logo from '../Logo';
import './styles.css';

const cName = 'Loading';

export default function Loading () {
  return (
    <div className={cName}>
      <Logo />
    </div>
  );
}
