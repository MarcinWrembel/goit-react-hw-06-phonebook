// import { createReducer } from '@reduxjs/toolkit';
// import { addContact, deleteContact, setFilter } from './actions';

// const contactsInitialState = {
//   contacts: [
//     { name: 'Janek', phone: '22222222221' },
//     { name: 'Janek2', phone: '222211111' },
//   ],
// };

// const filterInitialState = {
//   filter: '',
// };

// export const contactsReducer = createReducer(
//   contactsInitialState.contacts,
//   builder => {
//     builder
//       .addCase(addContact, (state, action) => {
//         const contact = action.payload;
//         state.push(contact);
//       })
//       .addCase(deleteContact, (state, action) => {
//         const index = state.findIndex(task => task.id === action.payload);
//         state.splice(index, 1);
//       });
//   }
// );

// //deprecated method
// // export const contactsReducer = createReducer(contactsInitialState, {
// //     [addContact]: (state, action) => {},
// //     [deleteContact]: (state, action) => {},
// //   });

// export const filterReducer = createReducer(
//   filterInitialState.filter,
//   builder => {
//     builder.addCase(setFilter, (state, action) => {
//       state.filter = action.payload;
//     });
//   }
// );
