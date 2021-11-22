import './App.css';
import { Container, SimpleGrid } from '@chakra-ui/layout';
import Card from './components/Card';
import { Button } from '@chakra-ui/button';
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { useDisclosure } from '@chakra-ui/hooks';
import CreateUser from './CreateUser';


const users = [
  { "id": 1, "lastName": "Pumaa", "firstName": "awitaaaaa", "occupation": "developerrrr", "age": 22, "status": 1 }
]

function App() {

  return (
    <Container maxWidth='container.lg' paddingY={10}>
      <CreateUser/>
      <SimpleGrid columns={[1,2,4]} spacing="30px" marginBottom={12}>
        {users.map(user => {
          return (<>
            <Card name={`${user.firstName} ${user.lastName}`} occupation={user.occupation}>
              <Button colorScheme="red" variant="solid" color='white' size="sm">
                <AiFillDelete />
              </Button>
            </Card>



          </>)
        })}

      </SimpleGrid>
    </Container>
  );
}

export default App;
