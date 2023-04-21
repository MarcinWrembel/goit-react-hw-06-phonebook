import React, { useEffect } from 'react';
import ContactForm from './Form/Form';
import ContactList from './Contacts/ContactList';
import Filter from './Filter/Filter';
import Section from './Section/Section';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const App = () => {
  const NEW_CONTACT = 'new-contact';

  const [lsContacts, setLsContacts] = useState([]);
  const contacts = useSelector(getContacts);


  useEffect(() => {
    console.log('render0');
    //set state for data from local storage on mount
    const localContacts = localStorage.getItem(NEW_CONTACT);
    if (localContacts.length > 0) {
      setLsContacts(JSON.parse(localContacts));
      // dispatch(addContact(lsContacts))
    }
  }, []);

  //saving data to localStorage by every state change


  useEffect(() => {
    const lsContacts = localStorage.getItem(NEW_CONTACT);
    if (lsContacts !== null) {
      setLsContacts(JSON.parse(lsContacts));
    } else if (contacts.length === 0) {
      console.log({contacts});
      setLsContacts([]);
    } else {
      setLsContacts(contacts);
    }
  }, [contacts]);



  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList lsContacts={lsContacts} />
        <ToastContainer />
      </Section>
    </>
  );
};

export default App;
