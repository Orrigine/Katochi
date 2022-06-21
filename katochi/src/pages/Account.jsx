import React, { Component } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import '../fonts/AdigianaUI.ttf';
import '../css/account.css'
import { Link } from "react-router-dom";
import { Col, Container, Row, Button } from "react-bootstrap";

class Account extends Component {

    constructor(props) {
        super(props)
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
        console.log("points",this.state.userData.points)
        if (!this.state.loggedIn) {
            return (<>
                <Navigation />
                <Container className='text-center'>
                    <p>Vous n'êtes pas connecté !</p>
                    <Link to='/sign'>Connectez-vous</Link> ou <Link to='/'>retournez sur la page d'accueil</Link>
                </Container>
                <Footer />
            </>)
        }

        return (<>
            <Navigation />
            <div id="account" className="account">

                <Row className='justify-content-md-center'>
                    <Col className="text-center" sm='11' lg='4'>
                        <h2 className="username">{this.state.userData.username}</h2>
                        {/* Put image import from db because valentin do not pull image with his fucking axios call */}
                    </Col>
                    <Col className="insert bar" sm='1' lg='1'></Col>
                    <Col className="" sm='11' lg='5'>
                        <Row>
                            <Col sm="9"><h3 className='points text-left'>Points</h3></Col>
                            <Col sm="3"><p className="point-fields">{this.state.userData.points}</p></Col>

                            <Col sm="9"><h3 className='points text-left'>Partie(s) remportée(s)</h3></Col>
                            <Col sm="3"><p className="point-fields">{this.state.userData.otakultureWins}</p></Col>

                            <Col sm="9"><h3 className='points text-left'>Succès</h3></Col>
                            <Col sm="3"><p className="point-fields">{this.state.userData.achievementNumber}</p></Col>
                        </Row>
                    </Col>
                </Row>

                <Row className='justify-content-md-center'>
                    <Col className='text-center' sm='12'>
                        <Link to="/sign">
                            <Button
                                onClick={() => {
                                    window.localStorage.removeItem("token");
                                    window.localStorage.removeItem("user");
                                }}
                                variant="secondary"
                            >
                                Se déconnecter
                            </Button>
                        </Link>
                    </Col>
                    <Col className='text-center' sm='12'>
                        <Link to='/'>
                            <Button variant="secondary">
                                Revenir sur la page d'accueil
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </div>

            <div class="footer-test">

                <Footer />
            </div>
        </>);
    }
}

export default Account;