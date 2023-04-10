import NameForm from './NameForm/NameForm';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import Layout from './Layout';
import { useSelector } from "react-redux";
import { selectError, selectIsLoading } from "./redux/selectors";

function App() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
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