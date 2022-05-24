// eslint-disable

import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom' ;
import MainContents from './pages/MainContents';
import StudyList from './pages/StudyList';
import defaultData from './data' ;
import { useState } from 'react';
import StudyDetail from './pages/StudyDetail';

function App() {
  let navigate = useNavigate() ;
  let [data] = useState(defaultData);
  
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={ ()=>{ navigate( '/shop'   )}}>HOME</Nav.Link>
          <Nav.Link onClick={ ()=>{ navigate( '/shop/0' )}}>detail</Nav.Link>
          <Nav.Link onClick={ ()=>{ navigate( '/study'  )}}>StudyView</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      <div className='main-bg'></div>
      <Routes>
        <Route exact path='/shop'   element= { <MainContents /> }> 
          <Route exact path='/shop/:id'   element= { <MainContents /> } /> 
        </Route>
        <Route exact path='/study'      element= { <StudyList docData={ data } /> } />
        <Route exact path='/study/:id'  element= { <StudyDetail docData={ data } /> } />
        <Route exact path='/*'      element= { <div>없는 페이지</div> } /> 
      </Routes>      
    </div>
  );
}
export default App;


function About() {
  return(
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}

