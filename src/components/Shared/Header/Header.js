import React from 'react';
import './Header.css';
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../../../images/logo.png';


const Header = () => {
      return (
            <Container>
    <Navbar bg="#e9ecef" expand="lg">
      <Navbar.Brand>
        <Link to="/">
          <Image src={logo} className="logoImg" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto navLink text-center">
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/dashboard/user/add-item">Add New Item</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </Container>
      );
};

export default Header;