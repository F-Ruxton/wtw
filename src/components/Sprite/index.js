import React from 'react';
import _ from 'lodash/fp';
import Image from '../Image';
import Row from '../Row';
import A from '../A';

const cName = 'Sprite';

const Sprite = ({
  imageProps = {},
  linkProps = {},
  children,
}) => (
  <div className={cName}>
    <A {...linkProps}>
      <Row>
        <Image className={`${cName}__img`} {...imageProps} />

        { !_.isEmpty(children) && <div className={`${cName}__children`}>{children}</div> }
      </Row>
    </A>
  </div>
);

export default Sprite;
