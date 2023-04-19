import { createSlice} from '@reduxjs/toolkit';


const contactsInitialState = {
  contacts: [
    { id: 1 ,name: 'Janek', phone: '22222222221' },
    { id: 2, name: 'Janek2', phone: '222211111' },
  ],
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
          payload: { id: contact.id, name: contact.name, phone: contact.number },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
    },
  },
});

// Generatory akcji
export const { addContact, deleteContact } = contactsSlice.actions;
// Reducer slice'u
export const contactsReducer = contactsSlice.reducer;
