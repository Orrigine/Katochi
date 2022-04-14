import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import carou1 from "../img/carou1.png";
import atelierCuisine from "../img/atelier_cuisine.png";
import '../css/carousel.css';
class Carouselle extends Component {
    render() {
        return (
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block"
                        src={carou1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Katoch'allenge</h3>
                        <p>Un mélange de quizz & blind test sur le mangas & animes !</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block"
                        src={atelierCuisine}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Atelier cuisine</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block"
                        src={carou1}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Soirée karaoké</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default Carouselle