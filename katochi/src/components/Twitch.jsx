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
    this.switchimg = '';
    this.switchvid = '';
    this.state = {
      vidPositions: {
        vid1: 'https://www.youtube.com/embed/iik25wqIuFo',
        vid2: 'https://www.youtube.com/embed/la9vFQ28A8I',
        vid3: 'https://www.youtube.com/embed/iik27wqIuFo'
      }
    }
  }

  video = (url) => {
    return <iframe id='1'
      src={url}
      frameBorder="0"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Vidéo !"
    />
  }

  swap = (id, vid) => {
    this.switchimg = document.getElementById(id).getAttribute('src');
    document.getElementById(id).setAttribute('src', twitch1);
    twitch1 = this.switchimg;

    if(id == 2){
      this.switchvid = this.state.vidPositions.vid2;
      this.state.vidPositions.vid2 = this.state.vidPositions.vid1;
      this.state.vidPositions.vid1 = this.switchvid
      document.getElementById(1).setAttribute('src', this.state.vidPositions.vid1);
    }
    else{
      this.switchvid = this.state.vidPositions.vid3;
      this.state.vidPositions.vid3 = this.state.vidPositions.vid1;
      this.state.vidPositions.vid1 = this.switchvid
      document.getElementById(1).setAttribute('src', this.state.vidPositions.vid1);
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
                {this.video(this.state.vidPositions.vid1)}
              </div>
            </Col>

            <Col lg="6" sm="12">
              <Row>
                <Col>
                <img className="imgTwitch" id="2" src={twitch2} alt="img twitch 2" onClick={() => this.swap("2", this.state.vidPositions.vid2)}/>

                </Col>
                <Col>
                <img className="imgTwitch" id="3" src={twitch3} alt="img twitch 3" onClick={() => this.swap("3", this.state.vidPositions.vid3)}/>
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