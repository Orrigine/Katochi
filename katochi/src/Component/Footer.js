import React from "react"
import { Link } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"
import { FaInstagram, FaTwitch, FaDiscord, FaYoutube } from "react-icons/fa"
import '../css/App.css';


export default () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col lg={3} md={3} xs={3}>
            <span><FaInstagram />Katochi_tv</span>
          </Col>
          <Col lg={3} md={3} xs={3}>
            <span><FaTwitch />Katochi_tv</span>
          </Col>
          <Col lg={3} md={3} xs={3}>
            <span><FaDiscord />KATOCHI</span>
          </Col>
          <Col lg={3} md={3} xs={3}>
            <span><FaYoutube />KATOCHI</span>
          </Col>
        </Row>
        <Row>
          <Col lg={12} md={12} xs={12}>
            <span>Contact: katochicorp@gmail.com</span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}