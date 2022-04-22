import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import logo from "../img/logo.png";
import '../css/carousel.css';
class Carouselle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            carousel: [],
            loading: true
        };
    }

    componentDidMount = async () => {
        const response = await fetch('http://localhost:1337/api/carousel-slides-tables?populate=*', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        const carousel = await response.json();

        this.setState({
            carousel: carousel.data,
            loading: false
        });
    }

    render() {

        if (this.state.loading) {
            return (
            <Carousel fade>
                    <Carousel.Item>
                        <img className="d-block img-articleCard" src={logo} alt="Logo Katochi" />
                    <Carousel.Caption>
                        <h3>Chargement du carousel</h3>
                        <p>Ne bougez pas, les images et le text chargent !</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            )
        }

        this.state.carousel.sort((a, b) => (a.attributes.date < b.attributes.date) ? 1 : ((b.attributes.date < a.attributes.date ? -1 : 0)))

        return (
            <Carousel fade>
                {this.state.carousel.map((data) =>
                    <Carousel.Item>
                        <img className="d-block img-articleCard" src={"http://localhost:1337" + data.attributes.image.data.attributes.url} alt={data.attributes.image.data.attributes.name} />
                        <Carousel.Caption>
                            <h3>{data.attributes.title}</h3>
                            <p className="carousel">{data.attributes.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )}
            </Carousel>
    )
    }
}

export default Carouselle