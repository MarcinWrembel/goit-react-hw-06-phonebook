import { createSlice } from '@reduxjs/toolkit';

const localContacts = JSON.parse(localStorage.getItem('new-contact'));

const contactsInitialState = {
  contacts: localContacts ? localContacts : [],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState.contacts,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(contact) {
        return {
          payload: {
            id: contact.id,
            name: contact.name,
            phone: contact.number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
    },
    loadContacts(state, action) {
      state.splice(0, state.length, ...action.payload);
    },
  },
});

// Generatory akcji
export const { addContact, deleteContact, loadContacts } =
  contactsSlice.actions;
// Reducer slice'u
export const contactsReducer = contactsSlice.reducer;
