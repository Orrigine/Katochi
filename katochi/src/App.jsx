import React, { Component, createContext, useContext } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { Link } from "react-router-dom"
import { Navbar } from "react-bootstrap"
import { Row, Col } from "react-bootstrap";
import './sass/App.scss';
import './fonts/AdigianaUI.ttf'
import Logo from "./img/logo.png";
import DarkMoon from "./img/dark_moon.png";
import Sun from "./img/sun.png";
import './sass/App.scss';
import './css/navbar.css';

import Navigation from "./components/Navigation.jsx";
import Acceuil from "./pages/Acceuil.jsx";
import Events from "./pages/Events.jsx";
import Articles from "./pages/Articles.jsx";
import Otakulture from "./pages/Otakulture.jsx";
import Account from "./pages/Account.jsx";
import Sign from "./pages/Sign.jsx";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            theme: "",
            loggedIn: false,
            userData: {}
        }

        // if (localStorage.getItem("theme")) {
        //     this.state = { theme: localStorage.getItem('theme') }
        // }
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
        // localStorage.setItem("theme", 'light');
        // const switchTheme = () => {
        //     const newTheme = this.state.theme === 'dark' ? 'light' : 'dark';
        //     this.setState({ theme: newTheme })
        //     localStorage.setItem("theme", this.state.theme);
        //     console.log("changing to", localStorage.getItem("theme"))
        //     console.log(localStorage.getItem("theme"));
        // }

        const actualTheme = localStorage.getItem("theme");
        // this.setState({ theme: test });
        // console.log("test app", test);
        return (
            <>
                <Provider store={store}>
                    <div id="app" className="app" data-theme={actualTheme}>
                        {/* <button onClick={() => switchTheme()}>Change theme</button> */}

                        <Router>
                            <Routes>
                                <Route exact path="/" element={<Acceuil />} />
                                <Route exact path="/events" element={<Events />} />
                                <Route exact path="/articles" element={<Articles />} />
                                <Route exact path="/otakulture" element={<Otakulture />} />
                                <Route exact path="/sign" element={<Sign />} />
                                <Route exact path="/account" element={<Account />} />
                            </Routes>
                        </Router>
                        <Row>
                            <Navbar id="nav" bg="light" expand="lg">
                                {/* <Container> */}
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">

                                    <Col className="vert left" lg={4}>
                                        {/* <Link to="/"><img src={Logo} height="50" className="" alt="logo" /></Link> */}
                                        {/* <ThemeButton /> */}
                                        {/* <button onClick={() => switchTheme()} className="toggle-theme img-theme"><img src={Sun} height="30" className="" alt="logo" /></button> */}
                                    </Col>

                                    <Col className="mid" lg={4}>
                                        {/* <Link className="align-items-center" id="navlink" to="/events">Événements</Link> */}
                                        {/* <Link className="align-items-center" id="navlink" to="/articles">Articles</Link> */}
                                        {/* <Link className="align-items-center" id="navlink" to="/otakulture">Otakulture</Link> */}
                                    </Col>

                                    <Col className="right" lg={4}>
                                        {/* {this.state.loggedIn ?
                                        <Link className="align-items-center" id="navlink" to="/account">{this.state.userData.username}</Link>
                                        :
                                        <Link className="align-items-center" id="navlink" to="/sign">Se connecter</Link>
                                    } */}
                                    </Col>

                                </Navbar.Collapse>

                            </Navbar>
                        </Row>
                    </div>
                </Provider>

            </>
        );

    }
}

export default App;









