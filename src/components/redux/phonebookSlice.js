import { createSlice } from '@reduxjs/toolkit';
import phoneBook from '../../../src/phoneBook.json';

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: {
      items: phoneBook,
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      if (index !== -1) {
        state.contacts.splice(index, 1);
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, setFilter } = phonebookSlice.actions;
export default phonebookSlice.reducer;
