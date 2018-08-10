import React from 'react';
import './styles.css';

const cName = 'ImageButton';

export default function ImageButton (props) {
  const { text } = props;

  return (
    <div className={cName}>
      { text }
    </div>
  );
}
