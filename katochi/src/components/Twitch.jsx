import React, { Component } from "react"
import { Col, Row, Container } from "react-bootstrap"
import twitch1 from "../img/imgtwitch1.JPG"
import twitch2 from "../img/imgtwitch2.JPG"
import twitch3 from "../img/imgtwitch3.JPG"
import youtube from "../img/youtube.png"
import twitch from "../img/twitch.png"
import "../css/twitch.css"

class Twitch extends Component {
 render() {
   return (
    <div>
      <h2 className="twitch-title1">Retrouvez nous dans YATAI
      tous les lundis à 19h sur <span className="Purple-color">Twitch</span> !</h2>
      <Container>
            <img className="imgTwitch" src={twitch1} alt="img twitch 1" />

            <img className="imgTwitch" src={twitch2} alt="img twitch 2" />
            
            <img className="imgTwitch" src={twitch3} alt="img twitch 3" />
      </Container>
      <h3 className="twitch-title2">Dernières diffusions</h3>
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
              <button class="twitch-btn">Plus de rediffusions <img className="iconButton" src={youtube} alt="youtube" /></button>
            </Row>
            <Row>
              <button class="twitch-btn">Découvrir la chaîne <img className="iconButton" src={twitch} alt="twitch" /></button>
            </Row>
          </Col>
      </Row>
    </Container>
  </div>
   );
 }
}

export default Twitch