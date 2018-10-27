import React from 'react';
import './styles.css';

const cName = 'Row';

const Row = ({ children, style = {} }) => (
  <div className={cName} style={style}>
    {children}
  </div>
);

export default Row;
