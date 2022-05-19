// eslint-disable

import { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom' ;
import MainView from './components/MainView';
import ShoesItem from "./components/ShoesItem";
import data from './data.js' ;



function App() {

  let [shoes] = useState(data) ;
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Cart</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      {console.log(shoes)}
      <div className='main-bg'></div>
      <div className='container'>
            <div className='row'>
            { 
                shoes.map( function(e, i) {
                return (
                    <ShoesItem toData={shoes[i]} key={i} />
                );
                })
            }
            </div>
        </div>
      
      <Routes>
        <Route path='/shop' component= { MainView } />
      </Routes>

      
    </div>
  );
}
export default App;