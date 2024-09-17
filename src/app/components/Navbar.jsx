'use client';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavbarToggle from 'react-bootstrap/NavbarToggle';

function NavigationBar() {
  const noBorders = { border: 'none' };
  return (
    <Navbar collapseOnSelect expand="sm">
      <Container className="flex align-middle">
        <Navbar.Brand href="/">ANDY DART</Navbar.Brand>
        <Navbar.Toggle style={noBorders} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="art">Art</Nav.Link>
            <Nav.Link href="#exhibitions">Exhibitions</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
