export const selectContacts = state => state.phonebook.contacts;

export const selectFilter = state => state.phonebook.filter;

export const selectVisibleContacts = state => {
  const contacts = selectContacts(state);
  const filter = selectFilter(state);
  const normalizedFilter = filter.toLowerCase();

  return contacts.items.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};
