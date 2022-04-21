import React, { Component } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import '../fonts/AdigianaUI.ttf';
import '../css/accueil.css'
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

class Account extends Component {

  constructor(props) {
    super(props)
    this.state = {
      connected: true,
      admin: true
    }
  }

  render() {

    if (!this.state.connected) {
      return (<>
        <Navigation getUserData={this.props.getUserData} />
        <Container className='centered'>
          <p>Vous n'êtes pas connecté !</p>
          <Link to='/sign'>Connectez-vous</Link> ou <Link to='/'>retournez sur la page d'accueil</Link>
        </Container>
        <Footer />
      </>)
    }

    return (<>
      <Navigation getUserData={this.props.getUserData} />
      <Row className='justify-content-md-center'>
        <Col sm='12' lg='5'>
          <p>Profile picture</p>
          {/* Put image import from db */}
        </Col>
        <Col sm='12' lg='7'>
          <p>Stats</p>
          {/* Put stats import from db */}
        </Col>
      </Row>

      <Container className='centered'>
        <Link to='/'>Revenir sur la page d'accueil</Link>
      </Container>

      <Footer />
    </>);
  }
}

export default Account;