import React from 'react';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import { getContacts, getStatusFilter } from 'redux/selectors';
import { Ul, Li, P, Button } from './ContactList.styled';

export const ContactList = ({ onDeleteContact }) => {
  const contacts = useSelector(getContacts);
  // const statusFilter = useSelector(getStatusFilter);
  return (
    <Ul>
      {contacts.map(({ id, name, number }) => (
        <Li key={id}>
          <P>{name}</P>
          <P>{number}</P>
          <Button type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </Button>
        </Li>
      ))}
    </Ul>
  );
};

export default ContactList;

// ContactList.propTypes = {
//   onDeleteContact: PropTypes.func.isRequired,
// };
