import React, { Component } from 'react';
import Header from '../../Header';
import Row from '../../Row';
import ContactDetails from '../../ContactDetails';
import ContactForm from '../../ContactForm';
import './styles.css';

export const CONTACT = 'CONTACT';

const cName = 'Contact';

const boxStyle = {
  margin: 20,
  width: '50%',
};

class Contact extends Component {
  render() {
    return (
      <div className={cName}>
        <Header>Contact</Header>

        <Row style={{ alignItems: 'flex-start' }}>
          <ContactDetails style={boxStyle} />

          <ContactForm style={boxStyle} />
        </Row>
      </div>
    );
  }
}

export default Contact;
