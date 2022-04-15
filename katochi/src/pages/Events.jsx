import React, { Component } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import '../fonts/AdigianaUI.ttf';
import '../css/accueil.css'
import { Link } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";

class Events extends Component {

    constructor(props) {
        super(props)
        this.state = {
            events: [],
            loading: true
        }
    }

    async componentDidMount() {
        const response = await fetch('http://localhost:1337/api/event-tables?populate=*', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        const events = await response.json();

        this.setState({
            events: events,
            loading: false
        });
    }

    render() {

        let nextEvents = []
        console.log(this.state.events)
        if (this.state.events.data) {
            nextEvents = this.state.events.data.filter(
                event => Date.parse(event.attributes.date) >= Date.now()
            )
        }

        return (<>
            <Navigation />

            <Row className="justify-content-md-center">
                {this.state.loading === true ?
                    <Col>
                        <p className='centered'>Les données sont en cours de chargement...</p>
                    </Col>
                    : // else
                    nextEvents === [] ?
                        <Col className='centered'>
                            <p>Aucun évennement à venir.</p>
                        </Col>
                        : // else
                        <>
                            <Col sm="12" lg="9"><h1 className="centered">Evennements à venir:</h1></Col>
                            {nextEvents.map((data) =>
                                <Col key={data.id} sm="12" lg="8">
                                    <h2>{data.attributes.name}</h2>
                                    <Row>
                                        <Col>
                                            image
                                            {/* {data.attributes.previewImage} */}
                                        </Col>
                                        <Col>
                                            <Container fluid="true">
                                                <h3>Adresse: </h3>
                                                {data.attributes.address}
                                            </Container>
                                            <Container fluid="true">
                                                <h3>Date: </h3>
                                                {data.attributes.date}
                                            </Container>
                                        </Col>
                                    </Row>
                                    <Button fluid>Voir l'évennement</Button>

                                    {/* OUVRIR UN MODAL OU UNE MERDE DU GENRE POUR METTRE TOUT CA : */}
                                    {/* {data.attributes.title1 && data.attributes.title1 ?
                                    data.attributes.title1
                                :""}
                                {data.attributes.title2 && data.attributes.title2 ?
                                    data.attributes.title2
                                :""}
                                {data.attributes.title3 && data.attributes.title3 ?
                                    data.attributes.title3
                                :""}
                                {data.attributes.title4 && data.attributes.title4 ?
                                    data.attributes.title4
                                :""}
                                {data.attributes.text1 && data.attributes.text1 ?
                                    data.attributes.text1
                                :""}
                                {data.attributes.text2 && data.attributes.text2 ?
                                    data.attributes.text2
                                :""}
                                {data.attributes.text3 && data.attributes.text3 ?
                                    data.attributes.text3
                                :""}
                                {data.attributes.text4 && data.attributes.text4 ?
                                    data.attributes.text4
                                :""}
                                {data.attributes.image1 && data.attributes.image1 ?
                                    data.attributes.image1
                                :""}
                                {data.attributes.image2 && data.attributes.image2 ?
                                    data.attributes.image2
                                :""}
                                {data.attributes.image3 && data.attributes.image3 ?
                                    data.attributes.image3
                                :""}
                                {data.attributes.image4 && data.attributes.image4 ?
                                    data.attributes.image4
                                :""} */}
                                </Col>
                            )}
                        </>
                }
            </Row>

            <Container className='centered'>
                <Link to='/'>Revenir sur la page d'accueil</Link>
            </Container>

            <Footer />
        </>);
    }
}

export default Events;