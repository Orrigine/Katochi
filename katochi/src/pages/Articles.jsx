import React, { Component } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import '../fonts/AdigianaUI.ttf';
import '../css/articles.css'
import { Link } from "react-router-dom";
import { Col, Row, Container } from "react-bootstrap"

class Articles extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

render() {
  return (<>
    <Navigation getUserData={this.props.getUserData}/>
    <div className="article">
      <Row>
        <Col lg={4} md={4} xs={4}>
          <img className="img-articleCard" src="" alt="placeholder" /> 
        </Col>
        <Col lg={8} md={8} xs={8}>
            <h2 className="article-title">title article Card</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Col>
      </Row>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident,
      sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident,
      sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

      <Row>
        <Col lg={4} md={4} xs={4}>
          <p>ecrit par quelqu'un</p>
        </Col>
        <Col lg={4} md={4} xs={4}>
        <div className="button-div">
            <button type="button" className="card-button" to><Link to={"/articles"}>Revenir sur la page d'accueil</Link></button>
        </div>
        </Col>
          
        <Col lg={4} md={4} xs={4}>
          <p className="post-date">date de parution</p>
        </Col>
      </Row>
    </div>
    <Footer />
  </>);
}

export default Articles;