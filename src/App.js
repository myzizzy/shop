import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import bg from './img/iu_001.jpg' ;


function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      <div className='main-bg'></div>
      {/* <div className='main-bg2' style={{backgroundImage : 'url(' + bg + ')' }}></div> */}
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>안녕</div>
          <div className='col-md-4'>안녕</div>
          <div className='col-md-4'>안녕</div>
        </div>
      </div>
    </div>
  );
}

export default App;