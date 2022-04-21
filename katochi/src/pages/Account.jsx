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

    async componentDidMount() {
        const user = JSON.parse(localStorage.getItem("user"));
        // const token = localStorage.getItem("token");
        if (user) {
            this.setState({
                loggedIn: true,
                userData: user
            })
        }

        const response = await fetch('http://localhost:1337/api/twitches/1?populate=*', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        const twitch = await response.json();




    }

    render() {
        console.log("userdara", this.state.userData)

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
            <div class="account">

                <Row className='justify-content-md-center'>
                    <Col className="text-center" sm='11' lg='4'>
                        <h2 className="username">{this.state.userData.username}</h2>
                        {/* Put image import from db */}
                    </Col>
                    <Col className="insert bar" sm='1' lg='1'></Col>
                    <Col className="" sm='11' lg='5'>
                        <Row>
                            <Col sm="6"><h3 className='points text-left'>Points</h3></Col>
                            <Col sm="6"><p className="point-fields">{this.state.userData.points}</p></Col>

                            <Col sm="6"><h3 className='points text-left'>Partie(s) remportée(s)</h3></Col>
                            <Col sm="6"><p className="point-fields">{this.state.userData.otakultureWins}</p></Col>

                            <Col sm="6"><h3 className='points text-left'>Succès</h3></Col>
                            <Col sm="6"><p className="point-fields">{this.state.userData.achievementNumber}</p></Col>
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