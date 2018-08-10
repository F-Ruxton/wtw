import React from 'react';
import ImageButton from '../ImageButton';
import Masthead from '../Masthead';
import './styles.css';

const cName = 'Nav';

export default function Nav () {
  return (
    <div className={cName}>
      <Masthead />
      <ImageButton text={"Home"} />
      <ImageButton text={"Portfolio"} />
      <ImageButton text={"About"} />
      <ImageButton text={"Contact"} />
    </div>
  );
}
