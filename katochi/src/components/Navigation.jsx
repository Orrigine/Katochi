import React from "react"
import { Link } from "react-router-dom"
import { Navbar } from "react-bootstrap"
import { Component } from "react";
import { Row, Col } from "react-bootstrap";

import ThemeSwitcher from "../theme/themeSwitcher";


import '../fonts/AdigianaUI.ttf'
import Logo from "../img/logo.png";

// import DarkMoon from "../img/dark_moon.png";
// import Sun from "../img/sun.png";
import '../sass/App.scss';
import '../css/navbar.css';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            userData: {}
        }
    }
    componentDidMount = () => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            this.setState({
                loggedIn: true,
                userData: user
            })
        }
    }
 
    
    render() {
        return (
            <>
                <Row>
                    <Navbar id="nav" bg="light" expand="lg">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">

                            <Col className="test left" lg={4}>
                                <Link to="/"><img src={Logo} height="50" className="" alt="logo" /></Link>
                                <ThemeSwitcher/>
                            </Col>

                            <Col className="mid" lg={4}>
                                <Link className="align-items-center" id="navlink" to="/events">Événements</Link>
                                <Link className="align-items-center" id="navlink" to="/articles">Articles</Link>
                                <Link className="align-items-center" id="navlink" to="/otakulture">Otakulture</Link>
                            </Col>

                            <Col className="right" lg={4}>
                                {this.state.loggedIn ?
                                    <Link className="align-items-center" id="navlink" to="/account">{this.state.userData.username}</Link>
                                    :
                                    <Link className="align-items-center" id="navlink" to="/sign">Se connecter</Link>
                                }
                            </Col>

                        </Navbar.Collapse>

                    </Navbar>
                </Row>
            </>
        );
    }
} export default Navigation