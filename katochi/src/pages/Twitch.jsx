import React, { Component } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import '../fonts/AdigianaUI.ttf';
import '../css/accueil.css'
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

class Twitch extends Component {

  render() {
    return (<>
      <Navigation />

      <Container className='centered'>
        <Link to='/'>Revenir sur la page d'accueil</Link>
      </Container>

      <Footer />
    </>);
  }
}

export default Twitch;