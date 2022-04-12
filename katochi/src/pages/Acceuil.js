import React, {Component} from "react";
import Navigation from "../Component/Navigation";
import Footer from "../Component/Footer";

class Acceuil extends Component {
  render() {
    return (
      <div className="acceuil">
        <Navigation />
        <div className="Header">
          <div className="logo">

          </div>
          <div className="survey">
            <div className="survey-title">
              <h2>Sondage de la semaine</h2>
            </div>
          </div>
        </div>

        <div className="Event">
          <div className="Event-title">

          </div>
        </div>
        <div className="Twitch">
        </div>
        <div className="Articles">
        </div>
        <Footer />
      </div>
    );
  }
}

export default Acceuil;