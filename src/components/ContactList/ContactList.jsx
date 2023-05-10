import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { getContacts, getStatusFilter } from 'redux/selectors';
import { getContacts } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
import { Ul, Li, P, Button } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);

  // const statusFilter = useSelector(getStatusFilter);
  const dispatch = useDispatch();
  const handleDelete = function (id) {
    // console.log(id);
    dispatch(deleteContact(id));
  };
  return (
    <Ul>
      {contacts.map(({ id, name, number }) => (
        <Li key={id}>
          <P>{name}</P>
          <P>{number}</P>
          <Button
            type="button"
            onClick={() => {
              handleDelete(id);
            }}
          >
            Delete
          </Button>
        </Li>
      ))}
    </Ul>
  );
};

export default ContactList;
