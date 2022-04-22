
import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap"
import Navigation from "../components/Navigation";
import Carouselle from "../components/Carousel";
import Footer from "../components/Footer";
import '../fonts/AdigianaUI.ttf';
import '../css/accueil.css'
import Twitch from "../components/Twitch";
import ArticleCard from "../components/ArticleCard";





class Acceuil extends Component {


    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        // console.log("props", this.props);
        // console.log(ThemeContext);
        return (
            <div className="acceuil">
                <Navigation switchTheme={() => this.props.switchTheme()} theme={this.props.theme} />
                <div id="logo" className="header">
                    <div  className="logo">

                    </div>
                </div>

                <div className="text-center ">
                    <h2 className="__title-event" >Nos Événements</h2>
                    <Carouselle />
                </div>
                <div id="twitch-back" className="twitch">
                    <Twitch />
                </div>
                <div id="articles" className="articles">
                    <div >
                        <h2 className="articles-title">articles</h2>
                        <Row>
                            <ArticleCard articleId='1' />
                            <ArticleCard articleId='2' />
                            <ArticleCard articleId='1' />
                            <ArticleCard articleId='2' />
                        </Row>
                    </div>
                    <div className="button-div">
                        <button id='article-button' className="article-button">afficher plus d'articles</button>
                    </div>
                </div>
                {/* <div id="footer"> */}
                <Footer />
                {/* </div> */}

            </div>
        );
    }

}

export default Acceuil;