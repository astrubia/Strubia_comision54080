import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import React from 'react';
import { CartWidget } from './CartWidget';
export const NavBar = () => {
    return (
      <Navbar bg="success" variant="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Medicommerce</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Insumos Medicos</Nav.Link>
          <Nav.Link href="#features">Ortopedia</Nav.Link>
          <Nav.Link href="#pricing">Optica</Nav.Link>
        </Nav>
        <CartWidget/>
      </Container>
    </Navbar>
      );
    };


