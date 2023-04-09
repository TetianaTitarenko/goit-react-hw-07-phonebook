import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../redux/operations';
import { selectContacts } from '../redux/selectors';
import { List, ListItem } from './Contact.styled';

const Contacts = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectContacts);
  const handleDelete = () => dispatch(deleteContact());

  return (
    <List>
      <h2>Contacts</h2>
      {visibleContacts.map(cont => (
        <ListItem key={cont.id}>
          <p>
            {cont.name} : {cont.number}
          </p>
          <button onClick={handleDelete(cont.id)}>Delete</button>
        </ListItem>
      ))}
    </List>
  );
};

export default Contacts;
