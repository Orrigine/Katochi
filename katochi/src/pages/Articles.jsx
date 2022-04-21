import React, { Component } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import '../fonts/AdigianaUI.ttf';
import '../css/accueil.css'
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

class Articles extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (<>
            <Navigation getTheme={() => this.getTheme} theme={this.props.theme} toggleTheme={() => this.props.toggleTheme()}  />

            <Container className='centered'>
                <Link to='/'>Revenir sur la page d'accueil</Link>
            </Container>

            <Footer />
        </>);
    }
}

export default Articles;