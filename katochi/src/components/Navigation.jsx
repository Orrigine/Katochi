import React from "react"
import { Link } from "react-router-dom"
import { Navbar } from "react-bootstrap"
import { Component } from "react";
import { Row, Col } from "react-bootstrap";


import '../fonts/AdigianaUI.ttf'
import Logo from "../img/logo.png";
import DarkMoon from "../img/dark_moon.png";
import '../css/App.css';
import '../css/navbar.css';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: []
        }
    }

    async componentDidMount() {
        this.setState({
            user: this.props.getUserData()
        })
    }
    render() {
        // console.log(this.props.getUserData())
        console.log("user",this.state.user)
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
                                <a className="moon"><img src={DarkMoon} height="30" className="" alt="logo" /></a>

                            </Col>

                            <Col className="mid" lg={4}>
                                <Link className="align-items-center" id="navlink" to="/events">Événements</Link>
                                <Link className="align-items-center" id="navlink" to="/articles">Articles</Link>
                                <Link className="align-items-center" id="navlink" to="/otakulture">Otakulture</Link>
                            </Col>

                            <Col className="right" lg={4}>

                                {this.state.user === [] ?
                                    <Link className="align-items-center" id="navlink" to="/sign">Se connecter</Link>
                                :
                                    <Link className="align-items-center" id="navlink" to="/account">COMPTE: {this.state.user}</Link>
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