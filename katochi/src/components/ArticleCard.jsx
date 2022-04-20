import React from "react"
import { Link } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"
import '../css/App.css';
import '../css/ArticleCard.css';
import { Component } from "react";

class ArticleCard extends Component {
    render() {
        return(
            <Col className="Card">
                
                    <img src="" alt="placeholder" />
                    <h2>title article Card</h2>
                    <p>lorem ipsum</p>
                    <button type="button" className="card-button">more</button>
                
            </Col>
        )
    }

} export default ArticleCard