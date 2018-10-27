import React from 'react';
import _ from 'lodash/fp';
import classNames from 'classnames';
import './styles.css';

const cName = 'FillImage';

const FillImage = ({
  image: { src } = {},
  className = '',
  style = {},
  withBorder = true,
  heightOffset = 0,
}) => (
  <div
    className={
      classNames(
        cName,
        {
          [className]: !_.isEmpty(className),
          [`${cName}__bordered`]: withBorder,
        }
      )
    }
    style={_.merge(style, {
      backgroundImage: `url(${src})`,
      height: `calc(100vh - 100px - ${heightOffset})`,
    })}
  />
);

export default FillImage;
