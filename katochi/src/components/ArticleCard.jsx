import React from "react"
import { Link } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"
import '../css/App.css';
import '../css/ArticleCard.css';
import { Component } from "react";
// import twitch1 from "../img/imgtwitch1.JPG"

class ArticleCard extends Component {
    render() {
        return(
            <Col className="Card">
                
<<<<<<< HEAD
                    <img className="img-articleCard" src="" alt="placeholder" /> 
=======
                    <img className="img-articleCard" src={""} alt="placeholder" /> 
>>>>>>> c350752b0b9a7a92eaf289bd2644f8c7dca3bb75
                    <h2>title article Card</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    
                    <div className="button-div">
                        <button type="button" className="card-button">Lire l'article</button>
                    </div>
            </Col>
        )
    }

} export default ArticleCard