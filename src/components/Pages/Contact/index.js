import React, { Component } from 'react';
import Header from '../../Header';
import Row from '../../Row';
import ContactDetails from '../../ContactDetails';
import ContactForm from '../../ContactForm';
import './styles.css';

export const CONTACT = 'CONTACT';

const cName = 'Contact';

class Contact extends Component {
  render() {
    return (
      <div className={cName}>
        <Header>Contact</Header>

        <ContactDetails />
        {/* <Row className={`${cName}__row`}>

          <ContactForm style={boxStyle} />
        </Row> */}
      </div>
    );
  }
}

export default Contact;
