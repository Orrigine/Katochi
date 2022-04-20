import React, { Component } from "react"
import { Col, Row, Container } from "react-bootstrap"
import youtube from "../img/youtube.png"
import twitch from "../img/twitch.png"
import "../css/twitch.css"

class Twitch extends Component {

  constructor(props) {
    super(props)
    this.state = {
      twitch: [],
      loading: true
    }
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:1337/api/twitches/1?populate=*', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    const twitch = await response.json();

    this.setState({
      twitch: twitch,
      loading: false
    });
  }

  render() {
    return (
      <div>
        <h2 className="twitch-title1">Retrouvez nous dans YATAI tous les lundis à 19h sur <span className="Purple-color">Twitch</span> !</h2>
        {this.state.loading?
          <h3>Images en cours de chargement...</h3>
        :
          <Container>
            <img className="imgTwitch" src={"http://localhost:1337" + this.state.twitch.data.attributes.img1.data.attributes.formats.medium.url} alt="twitch 1"/>
            <img className="imgTwitch" src={"http://localhost:1337" + this.state.twitch.data.attributes.img2.data.attributes.formats.medium.url} alt="twitch 2" />
            <img className="imgTwitch" src={"http://localhost:1337" + this.state.twitch.data.attributes.img3.data.attributes.formats.medium.url} alt="twitch 3" />
          </Container>
        }
        <h3 className="twitch-title2">Dernières diffusions</h3>
        {this.state.loading ?
          <h3>Vidéos en cours de chargement...</h3>
        :
          <Container>
            <Row>
              <Col lg="6" sm="12"> 
                <div className="video-responsive" >
                    <iframe
                    src={'https://www.youtube.com/embed/' + this.state.twitch.data.attributes.vid1}
                    frameBorder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Vidéo !"
                  />
                </div>
              </Col>
              <Col lg="6" sm="12">
                <Row>
                  <Col lg="6" sm="12">
                    <img className="imgTwitch"
                      src={'https://img.youtube.com/vi/' + this.state.twitch.data.attributes.vid2 + '/default.jpg'}
                      alt="video 2" 
                      onClick={() => {
                        let temp = this.state.twitch.data.attributes.vid2;
                        this.setState({
                          twitch: {
                            data: {
                              attributes: {
                                ...this.state.twitch.data.attributes,
                                vid2: this.state.twitch.data.attributes.vid1,
                                vid1: temp
                      }}}})}}
                    />
                  </Col>
                  <Col lg="6" sm="12">
                    <img className="imgTwitch"
                      src={'https://img.youtube.com/vi/' + this.state.twitch.data.attributes.vid3 + '/default.jpg'}
                      alt="video 3" 
                      onClick={() => {
                        let temp = this.state.twitch.data.attributes.vid3;
                        this.setState({
                          twitch: {
                            data: {
                              attributes: {
                                ...this.state.twitch.data.attributes,
                                vid3: this.state.twitch.data.attributes.vid1,
                                vid1: temp,
                      }}}})}}
                    />
                  </Col>
                  <button className="twitch-btn">Plus de rediffusions <img className="iconButton" src={youtube} alt="youtube" /></button>
                  <button className="twitch-btn">Découvrir la chaîne <img className="iconButton" src={twitch} alt="twitch" /></button>
                </Row>
              </Col>
            </Row>
          </Container>
        }
      </div>
    );
  }
}

export default Twitch