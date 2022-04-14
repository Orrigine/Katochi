import React, {
    Component
} from "react";
import Navigation from "../components/Navigation";
import Banner from "../img/event-banner.png";
import Micro from "../img/micro.png";
import { Button, Col, Row, Container } from "react-bootstrap"
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
              <Container>
                <Row className="row1">
                    <Col lg={{span:5}} md={{span:6}} sm={{span:6}}>
                        <img src={Micro} alt="Micro" className="micro"/>
                    </Col>
                    <Col>
                      <Row className="zone-text">
                        <Col className="title1" lg={{span: 5, offset:3}} md={{span: 7, offset:1}} sm={{span: 10, offset:2}}>
                          <div className="text1">
                          <h2>KARAOKÉ</h2>
                          </div>
                          <div className="rectangle">
                            <p>
                              Viens chanter les musiques de tes animes préférés !
                            </p>
                          </div>
                        </Col> 
                      </Row> 
                    </Col>  
                </Row>
              </Container>

            </div>
            </>
        );
    }
}
export default Events;