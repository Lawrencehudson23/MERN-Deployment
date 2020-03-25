import React from 'react';
import './App.css';
import {Link,Router} from "@reach/router"
import PirateList from './components/PirateList';

import NewPirate from './views/NewPirate';
import DetailPirate from './views/DetailPirate';
import Login from './views/Login';
import { Navbar, Nav} from 'react-bootstrap';
function App() {
  return (
    <div className="App">
        <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="">Lawrence</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link><Link to="/pirates/new">Add Pirate</Link></Nav.Link>
      <Nav.Link><Link to="/pirates">Crew Board</Link></Nav.Link>
      <Nav.Link ><Link to="/">Login</Link></Nav.Link>
    </Nav>
     
  </Navbar>

      
      <Router>
        <NewPirate path='/pirates/new'/>
        <PirateList path='/pirates'/>
        <DetailPirate path='/pirates/:id'/>
        <Login path='/'/>
      </Router>
    </div>
  );
}

export default App;
