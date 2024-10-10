'use client';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';

function NavigationBar() {
  const noBorders = { border: 'none' };
  return (
    <Navbar collapseOnSelect expand="sm">
      {/* centerOverride overrides Bootstrap */}
      <Container className="flex align-middle centerOverride py-2 my-2">
        <Navbar.Brand href="/" className="pl-1 ">
          ANDY DART
        </Navbar.Brand>
        <Navbar.Toggle style={noBorders} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="grow-0" id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* using LINK for client navigation / avoid loading again when link redirect to itself */}
            <Link href="/about" passHref legacyBehavior>
              <Nav.Link>About</Nav.Link>
            </Link>
            <Link href="/art" passHref legacyBehavior>
              <Nav.Link>Art</Nav.Link>
            </Link>
            <Link href="#exhibitions" passHref legacyBehavior>
              <Nav.Link>Exhibitions</Nav.Link>
            </Link>
            <Link href="/contact" passHref legacyBehavior>
              <Nav.Link>Contact</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
