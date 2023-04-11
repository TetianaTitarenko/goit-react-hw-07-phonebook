import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { deleteContact, fetchContscts } from '../redux/operations';
import {
  selectVisibleContacts,
  selectError,
  selectIsLoading,
} from '../redux/selectors';
import { List, ListItem } from './Contact.styled';

const Contacts = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContscts());
  }, [dispatch]);

  const onDelete = id => dispatch(deleteContact(id));

  return (
    <List>
      <h2>Contacts</h2>
      {isLoading && !error && <b>Request in progress...</b>}
      {visibleContacts.length === 0 ? (
        <p>The contact with this name is not in your contact book.</p>
      ) : (
        visibleContacts.map(contact => (
          <ListItem key={contact.id}>
            <p>
              {contact.name} : {contact.number}
            </p>
            <button onClick={() => onDelete(contact.id)}>Delete</button>
          </ListItem>
        ))
      )}
    </List>
  );
};

export default Contacts;
