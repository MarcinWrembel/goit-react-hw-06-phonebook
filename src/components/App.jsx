import React, { useEffect } from 'react';
import ContactForm from './Form/Form';
import ContactList from './Contacts/ContactList';
import Filter from './Filter/Filter';
import Section from './Section/Section';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';
// import { loadContacts } from 'redux/contactSlicer';

const App = () => {
  const NEW_CONTACT = 'new-contact';

  const contacts = useSelector(getContacts);
  // const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem(NEW_CONTACT, JSON.stringify(contacts));
    const localContacts = JSON.parse(localStorage.getItem(NEW_CONTACT));
    
    if (!localContacts || localContacts.length === 0) {
      localStorage.removeItem(NEW_CONTACT);
    }
  }, [contacts]);

  // useEffect(() => {
  //   const localContacts = JSON.parse(localStorage.getItem(NEW_CONTACT));
  //   if (localContacts) {
  //     dispatch(loadContacts(localContacts));
  //   }
  // }, [dispatch]);

  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList lsKey={NEW_CONTACT} />
        <ToastContainer />
      </Section>
    </>
  );
};

export default App;
