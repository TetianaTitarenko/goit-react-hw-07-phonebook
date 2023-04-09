import NameForm from './NameForm/NameForm';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import Layout from './Layout';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContscts } from "./redux/operations";
import { selectError, selectIsLoading } from "./redux/selectors";

function App() {
    const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContscts());
  }, [dispatch]);

  return (
    <Layout>
      <NameForm />
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <Contacts />
    </Layout>
  );
}

export default App;