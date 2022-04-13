import React, { Component } from "react";
import Navigation from "../components/Navigation";
import Carouselle from "../components/Carousel";
import Footer from "../components/Footer";
import '../fonts/AdigianaUI.ttf';
import '../css/accueil.css'
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

class Account extends Component {
  render() {
    return (<>
      <Navigation />
      
      <Row>
        <Col sm='12' lg='5'>
          {/* Put image import from db */}
        </Col>
        <Col sm='12' lg='7'>
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