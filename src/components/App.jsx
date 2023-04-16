import React, { useEffect, useState } from 'react';
import ContactForm from './Form/Form';
import ContactList from './Contacts/ContactList';
import Filter from './Filter/Filter';
import Section from './Section/Section';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const NEW_CONTACT = 'new-contact';

  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  //action on application loading
  useEffect(() => {
    const lsContacts = localStorage.getItem(NEW_CONTACT);
    const lsParsed = JSON.parse(lsContacts);

    if (lsParsed) {
      setContacts(lsParsed);
    }
  },[]);

  //saving data to localStorage
  useEffect(() => {
    //adding new contact to localStorage
    localStorage.setItem(NEW_CONTACT, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    setContacts([...contacts, newContact]);
    // console.log(this.state);
  };

  const filterName = e => {
    setFilter(e.currentTarget.value);
    // console.log(this.state.filter);
  };

  const filteredNames = () => {
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = id => {
    // console.log(id);
    const index = contacts.findIndex(el => el.id === id);
    const array = [...contacts];
    if (index !== -1) {
      array.splice(index, 1);
      setContacts(array);
    }
    // console.log(this.state.contacts);
  };

  return (
    <>
      <Section title="Phonebook">
        <ContactForm
          // onSubmit={values => console.log(values)}
          addContact={addContact}
          contacts={contacts}
        />
      </Section>
      <Section title="Contacts">
        <Filter filterState={filterName} />
        <ContactList contactsFiltered={filteredNames()} remove={deleteContact} />
        <ToastContainer />
      </Section>
    </>
  );
};

export default App;
