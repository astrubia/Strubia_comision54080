import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

import React from 'react';
import { CartWidget } from './CartWidget';
export const NavBar = () => {
    return (
      <Navbar bg="success" variant="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#">Medicommerce</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link to="/category/ortopedia" as={NavLink}>Ortopedia</Nav.Link>
          <Nav.Link to="/category/optica" as={NavLink}>Optica</Nav.Link>
          <Nav.Link to="/category/Dispositivos" as={NavLink}>Dispositivos</Nav.Link>
        </Nav>
        <CartWidget/>
      </Container>
    </Navbar>
      );
    };


