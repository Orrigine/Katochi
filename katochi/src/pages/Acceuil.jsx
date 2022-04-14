import React, {Component} from "react";
import Navigation from "../components/Navigation";
import Carouselle from "../components/Carousel";
import Footer from "../components/Footer";
import '../fonts/AdigianaUI.ttf';
import '../css/accueil.css'

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
        </div>
        <div className="articles">
        </div>
        <Footer />
      </div>
    );
  }
}

export default Acceuil;