import React from 'react';
import _ from 'lodash/fp';
import classNames from 'classnames';
import { Image, Transformation } from 'cloudinary-react';
import A from '../A';
import './styles.css';

const cName = 'LinkImage';

const LinkImage = ({
  className,
  to,
  img,
  linkText,
  transformations,
  ...imgProps
}) => (
  <div className={classNames(cName, className)}>
    <A to={to} className={`${cName}__link`}>
      <Image
        className={classNames(`${cName}__img`, { [`${className}__img`]: className })}
        publicId={_.get('public_id', img)}
        {...imgProps}
      >
        { _.map(t => <Transformation key={_.random(0,100000)} {...t} />, transformations) }
      </Image>
      <div className={classNames(
        `${cName}__text`,
        { [`${className}__text`]: !_.isEmpty(className) },
      )}>
        { linkText }
      </div>
    </A >
  </div>
);

export default LinkImage;
