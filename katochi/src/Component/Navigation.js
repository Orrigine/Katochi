import React from "react"
import { Link } from "react-router-dom"
import { Navbar, Nav, Container, Button } from "react-bootstrap"
import '../css/App.css';

export default () => {
  return(
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link id="navlink" to="/">Évément</Link>
            <Link id="navlink" to="/twitch">Twitch</Link>
            <Link id="navlink" to="/articles">Articles</Link>
            <Link id="navlink" to="/otakulture">Otakulture</Link>
            <Link id="navlink" to="/account">Se connecter</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}