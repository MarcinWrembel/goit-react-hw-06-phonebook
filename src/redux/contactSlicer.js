import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = {
  contacts: [
    { name: 'Janek', phone: '22222222221' },
    { name: 'Janek2', phone: '222211111' },
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
      prepare(text) {
        return {
          payload: { text, id: nanoid() },
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
