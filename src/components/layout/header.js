import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../assets/logo.png';


const header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
    <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img src={Logo}
              width="60px"
              height="60px"
              className="d-inline-block align-top"
              alt="creative-logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Navbar.Brand href="#home">National Defence Academy</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#aboutus">About Us</Nav.Link>
          <Nav.Link href="#facility">Facilities</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          
         
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default header