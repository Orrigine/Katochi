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
      connected: false
    }
  }

  render() {

    // const logoutOnClick = () => {
    //     dispatch(logout())
    //     localStorage.clear() // already clearing
    // }
    return (<>
      <Navigation />
      
      {!this.state.connected ?
        <Container className='centered'>
          <p>Vous n'êtes pas connecté !</p>
          <Link to='/sign'>Connectez-vous ici</Link>
        </Container>
      :   
        <Row>
          <Col sm='12' lg='5'>
            <p>Profile picture</p>
            {/* Put image import from db */}
          </Col>
          <Col sm='12' lg='7'>
            <p>Stats</p>
            {/* Put stats import from db */}
          </Col>
        </Row>
      }

      <Container className='centered'>
        <Link to='/'>Revenir sur la page d'accueil</Link>
      </Container>

      <Footer />
    </>);
  }
}

export default Account;