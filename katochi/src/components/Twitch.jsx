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
      vid1: 'iik25wqIuFo',
      vid2: 'U_rWZK_8vUY',
      vid3: 'TrqFje3KfFc'
    }
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
              <div className="video-responsive" >
                  <iframe
                  src={'https://www.youtube.com/embed/' + this.state.vid1}
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Vidéo !"
                />
              </div>
            </Col>

            <Col lg="6" sm="12">
              <Row>
                <Col>
                    <img className="imgTwitch"
                    src={'https://img.youtube.com/vi/' + this.state.vid2 + '/default.jpg'}
                    alt="video 2" 
                    onClick={() => {
                      let temp = this.state.vid2;
                      this.setState({
                        vid2: this.state.vid1,
                        vid1: temp
                      })
                    }}
                  />
                </Col>
                <Col>
                  <img className="imgTwitch"
                    src={'https://img.youtube.com/vi/' + this.state.vid3 + '/default.jpg'}
                    alt="video 3" 
                    onClick={() => {
                      let temp = this.state.vid3;
                      this.setState({
                        vid3: this.state.vid1,
                        vid1: temp
                      })
                    }}
                  />
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