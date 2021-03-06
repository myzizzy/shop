// eslint-disable

import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom' ;
import MainContents from './pages/MainContents';
import StudyList from './pages/StudyList';
import defaultData from './data' ;
import { useState } from 'react';
import StudyDetail from './pages/StudyDetail';
import NaverList from './pages/NaverList';
import axios from 'axios';

function App() {
    let navigate = useNavigate() ;
    let [data] = useState(defaultData);

    console.log(`NODE_ENV = ${process.env.NODE_ENV}`);
    
    return (
        <div className="App">
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link onClick={ ()=>{ navigate( '/shop'   )}}>HOME</Nav.Link>
                <Nav.Link onClick={ ()=>{ navigate( '/shop/0' )}}>detail</Nav.Link>
                <Nav.Link onClick={ ()=>{ navigate( '/study'  )}}>StudyView</Nav.Link>
                <Nav.Link onClick={ ()=>{ navigate( '/NaverAPI'  )}}>NaverAPI</Nav.Link>
                <Nav.Link onClick={ ()=>{ navigate( '/outletTest'  )}}>outletTest</Nav.Link>
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
            <Route exact path='/NaverAPI'   element= { <NaverList /> } />
            <Route exact path='/outletTest' element= { <StudyList docData={ data } /> } >
                <Route exact path=':id'  element= { <StudyDetail docData={ data } /> } />
            </Route>
            <Route exact path='/*'      element= { <div>?????? ?????????</div> } /> 
        </Routes>
        <button onClick={ ()=> {
            axios.get('https://codingapple1.github.io/shop/data2.json').then( (e)=> {console.log(e.data)}) ;
        }}>aaaaa</button>   
        </div>
    );
}
export default App;


function About() {
  return(
    <div>
      <h4>?????????ss??????</h4>
      <Outlet></Outlet>
    </div>
  )
}

