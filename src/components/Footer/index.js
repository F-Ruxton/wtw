import React from 'react';
import _ from 'lodash/fp';
import Row from '../Row';
import Sprite from '../Sprite';
import { icons } from '../../assets/images';
import getContact, { contactTypes, contactNames } from '../../shared/contactDetails';
import './styles.css';

const cName = 'Footer'

const credits = [
  {
    image: icons.angleBrackets,
    text: `Website by ${getContact(contactTypes.FULL_NAME, contactNames.FRED)}`,
  },
  {
    image: icons.camera,
    text: `Photos by ${getContact(contactTypes.FULL_NAME, contactNames.KIERAN)}`,
    linkProps: {
      href: getContact(contactTypes.WEBSITE, contactNames.KIERAN),
    },
  }
]

export default function Footer(props) {
  return (
    <div className={cName}>
      <Row>
        <div className={`${cName}__social-media`}>
          <Sprite
            imageProps={{
              image: icons.instagramLogo,
              withBorder: false,
              style: {
                height: 40,
                width: 40,
              }
            }}
            linkProps={{
              href: getContact(contactTypes.INSTAGRAM, contactNames.JAMES),
              newTab: true,
            }}
          />
        </div>
        <div>
          {
            _.map(({ image, text, linkProps }) => (
              <Sprite
                key={text}
                linkProps={linkProps}
                imageProps={{
                  image: image,
                  withBorder: false,
                  style: {
                    height: 30,
                    width: 30,
                    marginRight: 10,
                    background: 'white',
                  }
                }}
              >
                <span className={`${cName}__credit-text`}>{text}</span>
              </Sprite>
            ), credits)
          }
        </div>
        <div className={`${cName}__copyright`}>
          &copy; Wharncliffe Trailworks | {(new Date()).getFullYear()}
        </div>
      </Row>
    </div>
  );
}
