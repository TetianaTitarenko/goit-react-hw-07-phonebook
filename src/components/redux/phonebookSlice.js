import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContscts,
  addContact,
  deleteContact,
  setFilter,
} from './operations';

const handlePending = state => {
  state.contacts.isLoading = true;
};

const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  // reducers: {
  //   setFilter: (state, action) => {
  //     state.filter = action.payload;
  //   },
  // },
  extraReducers: {
    [fetchContscts.pending]: handlePending,
    [fetchContscts.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    [fetchContscts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items.push(action.payload);
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      const index = state.contacts.items.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.items.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,
    [setFilter.pending]: handlePending,
    [setFilter.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.filter = action.payload;
    },
    [setFilter.rejected]: handleRejected,
  },
});

export const phonebookReducer = phonebookSlice.reducer;
// export const { setFilter } = phonebookSlice.actions;
