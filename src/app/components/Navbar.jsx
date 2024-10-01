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
      {/* centerOverride overrides Bootstrap */}
      <Container className="flex align-middle centerOverride py-2 my-2">
        <Navbar.Brand href="/">ANDY DART</Navbar.Brand>
        <Navbar.Toggle style={noBorders} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="grow-0" id="basic-navbar-nav">
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
