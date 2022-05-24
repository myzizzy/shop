// eslint-disable

import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom' ;
import MainView from './components/MainView';
import DetailView from './components/detail/DetailView';
import MainContents from './pages/MainContents';

function App() {
  let navigate = useNavigate() ;

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={ ()=>{ navigate( '/shop'   )}}>HOME</Nav.Link>
          <Nav.Link onClick={ ()=>{ navigate( '/shop/0' )}}>detail</Nav.Link>
          <Nav.Link onClick={ ()=>{ navigate( '/about'  )}}>About</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      <div className='main-bg'></div>
      <Routes>
        <Route exact path='/shop'   element= { <MainContents /> }> 
          <Route exact path='/shop/:id'   element= { <MainContents /> } /> 
        </Route>
        {/* <Route exact path='/shop'   element= { <MainView /> } />  */}
        <Route exact path='/detail/:id' element= { <DetailView /> } /> 
        <Route exact path='/about'  element= { <About /> }>
          <Route path='member' element= { <div>회원정보</div> } /> 
        </Route>
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
