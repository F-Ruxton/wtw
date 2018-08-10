import React from 'react';
import _ from 'lodash/fp';
import logo from '../../assets/images/wtw-logo.svg'
import { SMALL, MEDIUM, LARGE, X_LARGE } from '../../shared/sizes';
import './styles.css';

const cName = 'Logo';

const getImgSize = size => {
  if (_.isObject(size) && !_.isUndefined(size.height )) {
    return {
      height: size.height,
      width:  size.width,
    };
  }

  switch (size) {
    case SMALL:   return { height: 40, width: 40 };
    case LARGE:   return { height: 100, width: 100 };
    case X_LARGE: return { height: 200, width: 200 };
    case MEDIUM:
    default: return { height: 60, width: 60 };
  }
}

export default function Logo (props) {
  const {
    size = MEDIUM,
  } = props;

  const imgSize = getImgSize(size);

  return (
    <div className={cName}>
      <img
        className={`${cName}__img`}
        style={imgSize}
        src={logo}
      />
    </div>
  );
}
