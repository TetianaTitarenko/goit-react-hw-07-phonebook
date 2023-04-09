import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { phonebookReducer } from './phonebookSlice';

const rootReducer = combineReducers({
  phonebook: phonebookReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
