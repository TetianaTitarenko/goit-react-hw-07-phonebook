import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { deleteContact, fetchContscts } from '../redux/operations';
import { selectVisibleContacts } from '../redux/selectors';
import { List, ListItem } from './Contact.styled';

const Contacts = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(fetchContscts());
  }, [dispatch]);

  return (
    <List>
      <h2>Contacts</h2>
      {visibleContacts.map(contact => (
        <ListItem key={contact.id}>
          <p>
            {contact.name} : {contact.number}
          </p>
          <button onClick={() => dispatch(deleteContact(contact.id))}>
            Delete
          </button>
        </ListItem>
      ))}
    </List>
  );
};

export default Contacts;
