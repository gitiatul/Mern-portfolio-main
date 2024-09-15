import React from "react";
import { Nav, Navbar } from "react-bootstrap";

// import logo from "../assets/logo/logo.png";

const Header = () => {
  return (
    <>
      <Navbar expand="lg" fixed="top" className="shadow-sm">
        <Navbar.Brand href="/">
          <span className="primary-col text-3xl font-semibold pl-3">
            ATUL BALODI.
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto">
            <Nav.Link className="nav-link" exact href="#about">
              About
            </Nav.Link>
            <Nav.Link className="nav-link" href="#project">
              Project
            </Nav.Link>
            <Nav.Link className="nav-link" href="#skills">
              Skills
            </Nav.Link>

            <Nav.Link className="nav-link" href="#work">
              Work
            </Nav.Link>
            <Nav.Link className="nav-link" href="#contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
