import React from 'react';
import getContact, { contactTypes, contactNames } from '../../shared/contactDetails';
import './styles.css';

const cName = 'ContactDetails';

const ContactDetails = ({
  style = {},
}) => (
  <div className={cName} style={style}>
    <div className={`${cName}__detail`}>
      <div>
        For any enquiries, please contact:
      </div>
      <span className={`${cName}__detail--text`}>
        {getContact(contactTypes.EMAIL, contactNames.INFO)}
      </span>
    </div>

    <div className={`${cName}__detail`}>
      <div>Or call:</div>
      <div className={`${cName}__detail--text`}>
        James - {getContact(contactTypes.MOBILE, contactNames.JAMES)}
      </div>
      <div className={`${cName}__detail--text`}>
        Fred - {getContact(contactTypes.MOBILE, contactNames.FRED)}
      </div>
    </div>

    <div className={`${cName}__detail`}>
      We look forward to hearing from you.
    </div>


    <div className={`${cName}__detail`}>
      <div>WHARNCLIFFE TRAILWORKS</div>
      <div>61 BLACKSMITH LANE    </div>
      <div>GRENOSIDE             </div>
      <div>SHEFFIELD             </div>
      <div>S35 8NB               </div>
    </div>



  </div>
);

export default ContactDetails;