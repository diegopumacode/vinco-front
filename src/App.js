import { Container } from '@chakra-ui/layout';
import CreateUser from './CreateUser';
import ListUser from './ListUser';


function App() {

  return (
    <Container maxWidth='container.lg' paddingY={10}>
      <CreateUser/>
      <ListUser/>
    </Container>
  );
}

export default App;
