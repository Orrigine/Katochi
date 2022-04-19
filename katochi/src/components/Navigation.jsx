import React from "react"
import { Link } from "react-router-dom"
import { Container, Navbar } from "react-bootstrap"
import { Component } from "react";
import { Row, Col } from "react-bootstrap";


import '../fonts/AdigianaUI.ttf'
import Logo from "../img/logo.png";
import DarkMoon from "../img/dark_moon.png";
import '../css/App.css';
import '../css/navbar.css';

class Navigation extends Component {
    render() {

        return (
            <>
                <Row>                        
                    <Navbar bg="light" expand="lg">
                        {/* <Container> */}
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    {/* <Nav className="me-auto"> */}
                                        <Col className="vert left" lg={4}>
                                            <Link to="/"><img src={Logo} height="50"  className="" alt="logo" /></Link>
                                            <Container className="moon"><img src={DarkMoon} height="30"  className="" alt="logo" /></Container>

                                        </Col>

                                        <Col className="mid" lg={4}>
                                            <Link className="align-items-center" id="navlink" to="/events">Événements</Link>
                                            <Link className="align-items-center" id="navlink" to="/articles">Articles</Link>
                                            <Link className="align-items-center" id="navlink" to="/otakulture">Otakulture</Link>
                                        </Col>

                                        <Col className="right" lg={4}>
                                            <Link className="align-items-center" id="navlink" to="/sign">Se connecter</Link>
                                        </Col>
                                    {/* </Nav> */}
                                </Navbar.Collapse>
                        {/* </Container> */}
                    </Navbar>
                </Row>
            </>
        );
    }
} export default Navigation