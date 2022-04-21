import React from "react"
import { Link } from "react-router-dom"
import { Navbar } from "react-bootstrap"
import { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { ThemeButton } from "../App";


import '../fonts/AdigianaUI.ttf'
import Logo from "../img/logo.png";
import DarkMoon from "../img/dark_moon.png";
import Sun from "../img/sun.png";
import '../css/App.css';
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
        // const token = localStorage.getItem("token");
        if (user) {
            this.setState({
                loggedIn: true,
                userData: user
            })
        }
    }

    render() {
        // console.log("children receiving theme",[this.props.theme])
        return (
            <>
                <Row>
                    <Navbar bg="light" expand="lg">
                        {/* <Container> */}
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            {/* <Nav className="me-auto"> */}
                            <Col className="vert left" lg={4}>
                                <Link to="/"><img src={Logo} height="50" className="" alt="logo" /></Link>
                                <ThemeButton/>
                                <button onClick={() => this.props.toggleTheme()} className="moon"><img src={Sun} height="30" className="" alt="logo" /></button>

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
                            {/* </Nav> */}
                        </Navbar.Collapse>
                        {/* </Container> */}
                    </Navbar>
                </Row>
            </>
        );
    }
} export default Navigation