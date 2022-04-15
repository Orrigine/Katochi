import React, { Component } from "react"
import { Col, Row, Container } from "react-bootstrap"
import twitch1 from "../img/imgtwitch1.JPG"
import twitch2 from "../img/imgtwitch2.JPG"
import twitch3 from "../img/imgtwitch3.JPG"
import youtube from "../img/youtube.png"
import twitch from "../img/twitch.png"
import "../css/twitch.css"

class Twitch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      vidPositions: {
        vid1: 'https://www.youtube.com/embed/iik25wqIuFo',
        vid2: 'https://www.youtube.com/embed/iik28wqIuFo',
        vid3: 'https://www.youtube.com/embed/ijk25wqIuFo'
      }
    }
  }

  video = (url) => {
    return <iframe
      src={url}
      frameBorder="0"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Vidéo !"
    />
  }

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
            <Col lg="6" sm="12">
              <div id='1' className="video-responsive">
                {this.video(this.state.vidPositions.vid1)}
              </div>
            </Col>

            <Col lg="6" sm="12">
              <Row>
                <Col>
                  <div id='2' className="video-responsive">
                    {this.video(this.state.vidPositions.vid2)}
                  </div>

                </Col>
                <Col>
                  <div id='3' className="video-responsive">
                    {this.video(this.state.vidPositions.vid3)}
                  </div>
                </Col>
              </Row>
              <Row>
                <button className="twitch-btn">Plus de rediffusions <img className="iconButton" src={youtube} alt="youtube" /></button>
              </Row>
              <Row>
                <button className="twitch-btn">Découvrir la chaîne <img className="iconButton" src={twitch} alt="twitch" /></button>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Twitch