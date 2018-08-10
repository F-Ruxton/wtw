import React from 'react';
import Logo from '../Logo';
import { SMALL, MEDIUM } from '../../shared/sizes';
import './styles.css';

const cName = 'Masthead';

export default function Masthead (props) {
  const {
    size = MEDIUM,
  } = props;

  return (
    <div className={cName}>
      <Logo size={size} />
      <div className={`${cName}__text`}>
        { size === SMALL ? 'WTW' : 'Wharncliffe Trailworks' }
      </div>
    </div>
  );
}
