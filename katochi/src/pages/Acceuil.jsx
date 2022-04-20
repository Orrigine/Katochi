import React, {Component} from "react";
import Navigation from "../components/Navigation";
import Carouselle from "../components/Carousel";
import Footer from "../components/Footer";
import '../fonts/AdigianaUI.ttf';
import '../css/accueil.css'
import Twitch from "../components/Twitch";
import ArticleCard from "../components/ArticleCard";


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
            <h2>Nos Événements</h2>
            <Carouselle />
        </div>
        <div className="twitch">
          <Twitch />
        </div>
        <div className="articles">
          <div >
            <h2 className="articles-title">articles</h2>
            <Row>
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            </Row>
          </div>
          < button className="article-button">afficher plus d'articles</button>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Acceuil;