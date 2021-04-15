
import UserList from './Components/UserList/UserList'
import {Card} from 'react-bootstrap';

function App() {
  return (
    <div >
      <Card   border="primary"  >
        <Card.Header style={{textAlign:'center'}}> <h1> Users List !</h1> </Card.Header>
        <Card.Body>
             <UserList/>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
