import React from 'react';
import _ from 'lodash/fp';
import classNames from 'classnames';
import A from '../A';
import FillImage from '../FillImage';
import './styles.css';

// import { Image, Transformation } from 'cloudinary-react';

const cName = 'LinkImage';

const LinkImage = ({
  className,
  to,
  img = {},
  linkText,
  // transformations,
  ...imgProps
}) => {
  return (
    <div className={classNames(cName, className)}>
      <A to={to} className={`${cName}__link`}>
        {/* <Image
          className={classNames(`${cName}__img`, { [`${className}__img`]: className })}
          publicId={_.get('public_id', img)}
          {...imgProps}
        >
          { _.map(t => <Transformation key={_.random(0,100000)} {...t} />, transformations) }
        </Image> */}

        <FillImage
          className={`${cName}__img`}
          image={{ src: _.get('url', img) }}
          {...imgProps}
        />

        <div className={classNames(
          `${cName}__text`,
          { [`${className}__text`]: !_.isEmpty(className) },
        )}>
          { linkText }
        </div>
      </A >
    </div>
  );
}

export default LinkImage;
