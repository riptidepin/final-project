import React, { useState } from 'react';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const NavbarComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Handle search submit logic here
    console.log('Searching for:', searchTerm);
  };

  const isLoginPage = location.pathname === '/';
  const isRegistrationPage = location.pathname === '/registration';

  return (
    <>
      {!isLoginPage && !isRegistrationPage && (
        <Navbar bg="success" expand="lg">
          <Navbar.Brand href="/home" style={{ color: 'white', marginRight: '20px', marginLeft: '35px', textAlign: 'center' }}>
            <div style={{ fontSize: '34px', fontWeight: 'bold', marginBottom: '5px' }}>Jingles</div>
            <div style={{ fontSize: '14px', fontWeight: 'normal' }}>Jobs for singles</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/home" style={{ color: 'white', marginRight: '20px', marginLeft: '25px' }}>Home</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/favorites" style={{ color: 'white', marginRight: '20px' }}>Favorites</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/profile" style={{ color: 'white', marginRight: '20px', marginLeft: 'auto' }}>Profile</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )}
    </>
  );
};

export default NavbarComponent;
