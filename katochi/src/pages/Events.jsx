import React, { Component } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import '../fonts/AdigianaUI.ttf';
import '../css/event.css'
import ligne from '../img/ligne.png'
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
            <Navigation getTheme={() => this.getTheme} toggleTheme={() => this.props.toggleTheme()}  />

            <Row className="justify-content-md-center">
                {this.state.loading === true ?
                    <Col>
                        <p className='centered'>Les données sont en cours de chargement...</p>
                    </Col>
                    : // else
                    nextEvents === [] ?
                        <Col className='centered'>
                            <p>Aucun événement à venir.</p>
                        </Col>
                        : // else
                        <>
                            {nextEvents.map((data) =>
                            
                                <Col key={data.id} sm="12" lg="8">
                                    {console.log(data)}
                                    <img className="banner" src={"http://localhost:1337" + data.attributes.previewImage.data.attributes.url} />
                                    <Row>
                                        <Col className="inscription" lg={{span: 4, offset: 4}} md={{span:4, offset:4}} sm={{span:4, offset:4}} xs={{span:4, offset:4}}>
                                            <Button size="lg">
                                                S'inscrire !
                                            </Button>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <img className="image" src={"http://localhost:1337" + data.attributes.image1.data.attributes.url} />
                                        </Col>
                                        <Col className="col-text">
                                            <Row className=''>
                                                <Col lg={{span:8, offset:2}} md={{span:8, offset:2}} sm={{span:8, offset:2}} xs={{span:10, offset:1}} className=''>
                                                    <h1 className="event-title center">{data.attributes.title1}</h1>
                                                </Col>
                                            </Row>
                                            <Row className=''>
                                                <Col lg={{span:10, offset:1}} md={{span:10, offset:1}} sm={{span:10, offset:1}} xs={{span:10, offset:1}}>
                                                    <img className="ligne" src={ligne} />
                                                </Col>
                                            </Row>
                                            <Row className='row-rectangle'>
                                                <Col lg={{span: 8, offset: 2}} md={{span: 10, offset: 1}} sm={{span:10, offset: 1}} xs={{span:12}} className="zone-rectangle">
                                                    <Row>
                                                        <Col className="">
                                                            <div className="rectangle">
                                                                <Row>
                                                                    <Col lg={{span:10, offset:1}} md={{span:10, offset:1}} sm={{span:10, offset:1}} xs={{span:10, offset:1}}>
                                                                        <p className="center event-text">
                                                                            {data.attributes.text1}
                                                                        </p>
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <Row className="__margin">
                                        <Col className="col-text">
                                            <Row className=''>
                                                <Col lg={{span:8, offset:2}} md={{span:8, offset:2}} sm={{span:8, offset:2}} xs={{span:10, offset:1}} className=''>
                                                    <h1 className="event-title2 center">{data.attributes.title2}</h1>
                                                </Col>
                                            </Row>
                                            <Row className=''>
                                                <Col lg={{span:10, offset:1}} md={{span:10, offset:1}} sm={{span:10, offset:1}} xs={{span:10, offset:1}}>
                                                    <img className="ligne" src={ligne} />
                                                </Col>
                                            </Row>
                                            <Row className='row-rectangle2'>
                                                <Col lg={{span: 8, offset: 2}} md={{span: 10, offset: 1}} sm={{span:10, offset: 1}} xs={{span:12}} className="zone-rectangle">
                                                    <Row>
                                                        <Col className="">
                                                            <div className="rectangle">
                                                                <Row>
                                                                    <Col lg={{span:10, offset:1}} md={{span:10, offset:1}} sm={{span:10, offset:1}} xs={{span:10, offset:1}}>
                                                                        <p className="center event-text2">
                                                                            {data.attributes.text2}
                                                                        </p>
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Col>                                        
                                        <Col>
                                            <img className="image" src={"http://localhost:1337" + data.attributes.image2.data.attributes.url} />
                                        </Col>
                                    </Row>
                                    <Row className="__margin"> 
                                        <Col>
                                            <img className="image" src={"http://localhost:1337" + data.attributes.image3.data.attributes.url} />
                                        </Col>
                                        <Col className="col-text">
                                            <Row className=''>
                                                <Col lg={{span:10, offset:1}} md={{span:10, offset:1}} sm={{span:10, offset:1}} xs={{span:10, offset:1}} className=''>
                                                    <h1 className="event-title3 center">{data.attributes.title3}</h1>
                                                </Col>
                                            </Row>
                                            <Row className=''>
                                                <Col lg={{span:10, offset:1}} md={{span:10, offset:1}} sm={{span:10, offset:1}} xs={{span:10, offset:1}}>
                                                    <img className="ligne" src={ligne} />
                                                </Col>
                                            </Row>
                                            <Row className='row-rectangle'>
                                                <Col lg={{span: 8, offset: 2}} md={{span: 10, offset: 1}} sm={{span:10, offset: 1}} xs={{span:12}} className="zone-rectangle">
                                                    <Row>
                                                        <Col className="">
                                                            <div className="rectangle">
                                                                <Row>
                                                                    <Col lg={{span:10, offset:1}} md={{span:10, offset:1}} sm={{span:10, offset:1}} xs={{span:10, offset:1}}>
                                                                        <p className="center event-text3">
                                                                            {data.attributes.text3}
                                                                        </p>
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Col>                                        
                                       
                                    </Row>
                                    <Row className="__margin">
                                        <Col className="col-text">
                                            <Row className=''>
                                                <Col lg={{span:8, offset:2}} md={{span:8, offset:2}} sm={{span:8, offset:2}} xs={{span:10, offset:1}} className=''>
                                                    <h1 className="event-title4 center">{data.attributes.title4}</h1>
                                                </Col>
                                            </Row>
                                            <Row className=''>
                                                <Col lg={{span:10, offset:1}} md={{span:10, offset:1}} sm={{span:10, offset:1}} xs={{span:10, offset:1}}>
                                                    <img className="ligne" src={ligne} />
                                                </Col>
                                            </Row>
                                            <Row className='row-rectangle'>
                                                <Col lg={{span: 8, offset: 2}} md={{span: 10, offset: 1}} sm={{span:10, offset: 1}} xs={{span:12}} className="zone-rectangle">
                                                    <Row>
                                                        <Col className="">
                                                            <div className="rectangle">
                                                                <Row>
                                                                    <Col lg={{span:10, offset:1}} md={{span:10, offset:1}} sm={{span:10, offset:1}} xs={{span:10, offset:1}}>
                                                                        <p className="center event-text4">
                                                                            {data.attributes.text4}
                                                                        </p>
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Col>                                        
                                        <Col>
                                            <img className="image" src={"http://localhost:1337" + data.attributes.image4.data.attributes.url} />
                                        </Col>
                                    </Row>
                                    <Row className="__margin">
                                        <Col lg={{span: 3}} md={{span: 3}} sm={{span: 3}} xs={{span: 3}}>
                                            <h2 className="__info center">Informations importantes :</h2>
                                        </Col>
                                        <Col className=''>
                                            <Row className="col-text">
                                                <Col className="center" lg={{span: 3, offset:1}} md={{span: 3, offset:1}} sm={{span: 3, offset:1}} xs={{span: 3, offset:1}}>
                                                <p className="__date">{data.attributes.date}</p>
                                                </Col>
                                                <Col className="center" lg={{span: 5}} md={{span: 5}} sm={{span: 5}} xs={{span: 5}}>
                                                    <p className="__address">{data.attributes.address}</p>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="inscription" lg={{span: 4, offset: 4}} md={{span:4, offset:4}} sm={{span:4, offset:4}} xs={{span:4, offset:4}}>
                                            <Button size="lg">
                                                S'inscrire !
                                            </Button>
                                        </Col>
                                    </Row>
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