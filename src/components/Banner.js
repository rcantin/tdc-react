import React from "react";
import logo from "../img/tdclogo-whitetext.svg";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";

function Banner() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/">
        <img src={logo} alt="The Dream Centre" height="30" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Programs" id="collasible-nav-dropdown">
            <NavDropdown.Item as={Link} to="/">
              Action
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/">
              Something
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/contact">
            Contact Us
          </Nav.Link>
        </Nav>
        <Navbar.Text className="mr-auto">
          <Button variant="pink" as={Link} to="/">
            Virtual Classes
          </Button>
        </Navbar.Text>
        <Nav>
          <Nav.Link as={Link} to="/">
            Parent Portal
          </Nav.Link>
          <Nav.Link as={Link} to="/">
            Register
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Banner;
