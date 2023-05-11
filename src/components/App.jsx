import { React, useState } from 'react';
import Modal from 'components/Modal';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import ContactForm from 'components/ContactForm';
import {
  Book,
  Button,
  CloseButton,
  ModalBlock,
  ModalItems,
} from './App.styled';

let localContacts = localStorage.getItem('contacts');
localContacts = JSON.parse(localContacts);

if (!localContacts) {
  localContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
  localStorage.setItem('contacts', JSON.stringify(localContacts));
}

export const App = () => {
  const [contacts] = useState(localContacts);

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Book>
      <h1>Phonebook</h1>
      <Button type="button" onClick={toggleModal}>
        Add Contact
      </Button>
      {showModal && (
        <Modal onClose={toggleModal}>
          <ModalBlock>
            <ModalItems>
              <CloseButton type="button" onClick={toggleModal}>
                Close
              </CloseButton>
              <ContactForm />
            </ModalItems>
          </ModalBlock>
        </Modal>
      )}

      {contacts.length > 0 && (
        <>
          <h2>Contacts</h2>
          <Filter />
        </>
      )}
      <ContactList />
    </Book>
  );
};
