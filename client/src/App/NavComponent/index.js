import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from 'react-router-dom';

import './NavComponent.css';

const instagram = "https://www.instagram.com/valeryyershov/";

export default function NavComponent() {
  return (
    <Navbar className="Navbar" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">Valery Yershov</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto">
          <NavDropdown className="NavItem" title="Latest Collections" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/collections/seaside">Seaside</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/collections/underground">Underground</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link className="NavItem" as={Link} to="/technique">Discover the Technique</Nav.Link>
          <Nav.Link className="NavItem" as={Link} to="/history">History</Nav.Link>
          <Nav.Link className="NavItem" as={Link} to="/prior_works">Prior Work</Nav.Link>
          <Nav.Link className="NavItem" as={Link} to="/contact">Contact Valery</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link style={{ marginLeft: '15px' }} href={instagram}>
            <i className="fa fa-lg fa-instagram" aria-hidden="true" />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
