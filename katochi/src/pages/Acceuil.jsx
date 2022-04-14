import React, {Component} from "react";
import Navigation from "../components/Navigation";
import Carouselle from "../components/Carousel";
import Footer from "../components/Footer";
import { Container, Row, Col } from "react-bootstrap"
import '../fonts/AdigianaUI.ttf';
import '../css/accueil.css'
import twitch1 from "../img/imgtwitch1.JPG"
import twitch2 from "../img/imgtwitch2.JPG"
import twitch3 from "../img/imgtwitch3.JPG"
import logo from "../img/logo.png"

class Acceuil extends Component {
  render() {
    return (
      <div className="acceuil">
        <Navigation />
        <div className="header">
          <div className="logo">

          </div>
        </div>

        <div className="event">
          <div className="event-title">
            <h2>Nos Événements</h2>
            <div className="carou">
              <Carouselle />
            </div>
          </div>
          <div className="event-carousel">
            
          </div>
        </div>
        <div className="twitch">
          <div>
            <h2 className="twitch-title1">Retrouvez nous dans YATAI
            tous les lundis à 19h sur Twitch !</h2>
            <Container>
                  <img className="imgTwitch" src={twitch1} alt="img twitch 1" />

                  <img className="imgTwitch" src={twitch2} alt="img twitch 2" />
                  
                  <img className="imgTwitch" src={twitch3} alt="img twitch 3" />
            </Container>
            <h3 className="twitch-title2">Dèrnieres diffusions</h3>
            <Container>
              <Row>
                <Col>
                  <div id='1' className="video-responsive"><iframe
                    width="400"
                    height="240"
                    src={`https://www.youtube.com/embed/iik25wqIuFo`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                  />
                  </div>
                </Col>
              
                <Col>
                  <Row>
                    <Col>
                      <div id='2' className="video-responsive"><iframe
                        width="200"
                        height="120"
                        src={`https://www.youtube.com/embed/iik25wqIuFo`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                      />
                      </div>

                    </Col>
                    <Col>
                      <div id='3' className="video-responsive"><iframe
                        width="200"
                        height="120"
                        src={`https://www.youtube.com/embed/iik25wqIuFo`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                      />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <button class="twitch-btn">Plus de rediffusions <img className="logotwitch" src={logo} alt="logo" /></button>
                  </Row>
                  <Row>
                    <button class="twitch-btn">Découvrir la chaîne<img className="logotwitch" src={logo} alt="logo" /></button>
                  </Row>
                </Col>
            </Row>
          </Container>
          </div>
        </div>
        <div className="articles">
        </div>
        <Footer />
      </div>
    );
  }
}

export default Acceuil;