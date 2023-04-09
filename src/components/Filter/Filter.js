import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../redux/operations';
import { selectFilter } from '../redux/selectors';
import Input from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectFilter);

  const handleFilterChange = event => {
    dispatch(setFilter(event.currentTarget.value));
    console.log(event.currentTarget.value);
  };

  return (
    <label>
      <h3>Find contacts by name</h3>
      <Input type="text" value={filter} onChange={handleFilterChange()} />
    </label>
  );
};

export default Filter;
