import React, {
    Component
} from "react";
import Navigation from "../components/Navigation";
import Banner from "../img/event-banner.png";
import Micro from "../img/micro.png";
import { Button, Col, Row } from "react-bootstrap"
import '../css/event.css';

class Events extends Component {
    render() {
        console.log(Banner);
        return (
            <>
            <div>
                <Navigation />
                <Row>
                    <Col lg={12} md={12} sm={12} className="banner">
                        <img src={Banner} alt="Banner"/>
                    </Col>
                </Row>
                <Row className="inscription">
                    <Col lg={{ span: 6, offset: 5 }} md={{ span: 11, offset: 4 }} sm={{ span: 8, offset: 3 }}>
                        <Button variant="primary" size="lg">
                            S'inscrire !
                        </Button>  
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Row>
                            <Col className="row1" lg={{offset:2}}>
                                <img src={Micro} alt="Micro"/>
                                <div className="text1">
                                    <h2>
                                        KARAOKÉ
                                    </h2>
                                    <div className="rectangle">
                                        <p>
                                            Viens chanter les musiques de tes animes préférés !
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
            </>
        );
    }
}
export default Events;