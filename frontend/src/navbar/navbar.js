import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
//import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
//import Tooltip from 'react-bootstrap/Tooltip';
import { Outlet } from "react-router-dom";
import './navbar.css'
//import Button from 'react-bootstrap/esm/Button';








const NavMenu = () => {

  /*return (
    <div>
      <button type="button" onClick={handleClick}>
        Click Me
      </button>

      <input value={count} disabled />
    </div>
  );*/

  return (
    <>
      <Navbar id='okay' expand="lg">
        <Container>
            <Navbar.Brand style={{color:'white'}}>My React Website</Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" style={{color:'white'}}>Home</Nav.Link>
              <Nav.Link style={{color:'white'}}>Link</Nav.Link>
              <Nav.Link style={{color:'white'}} href='/chat'>Chat</Nav.Link>
              <NavDropdown style={{color:'white'}} title="Community" id="basic-nav-dropdown"> 
                <NavDropdown.Item  href="/forum">Forum</NavDropdown.Item>
                <NavDropdown.Item  href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item   href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item  href="/exercise">
                  Exercise
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />

    </>



  );
}

export default NavMenu;