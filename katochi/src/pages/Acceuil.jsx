import React, { Component } from "react";
import Navigation from "../components/Navigation";
import Carouselle from "../components/Carousel";
import Footer from "../components/Footer";
import '../fonts/AdigianaUI.ttf';
import '../css/accueil.css'
import Twitch from "../components/Twitch";



class Acceuil extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        console.log(this.props);
        return (
            <div className="acceuil">
                <Navigation getUserData={this.props.getUserData} />
                <div className="header">
                    <div className="logo">

                    </div>
                </div>

                <div className="text-center event">
                    <h2>Nos Événements</h2>
                    <Carouselle />
                </div>
                <div className="twitch">
                    <Twitch />
                </div>
                <div className="articles">
                </div>
                <Footer />
            </div>
        );
    }
}

export default Acceuil;