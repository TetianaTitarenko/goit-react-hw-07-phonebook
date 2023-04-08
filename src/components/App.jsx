import NameForm from './NameForm/NameForm';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import Layout from './Layout';

function App() {

  return (
    <Layout>
      <NameForm />
      <Filter />
      <Contacts />
    </Layout>
  );
}

export default App;