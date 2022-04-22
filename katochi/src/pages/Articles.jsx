import React, { Component } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import '../fonts/AdigianaUI.ttf';
import '../css/articles.css'
import { Link } from "react-router-dom";
import { Col, Row, Container } from "react-bootstrap"

class Articles extends Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true
        };
    }

    componentDidMount = async () => {
        const response = await fetch('http://localhost:1337/api/article-tables?populate=*', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        const articles = await response.json();

        this.setState({
            articles: articles.data,
            loading: false
        });
    }

    render() {

        if (this.state.loading) {
            return (
                <>
                    <Navigation switchTheme={() => this.props.switchTheme} />
                    <p className="centered"> Articles en chargement... </p>
                    <Footer />
                </>
            )
        }

        this.state.articles.sort((a, b) => (a.attributes.date < b.attributes.date) ? 1 : ((b.attributes.date < a.attributes.date ? -1 : 0)))
        
        return (<>
            <Navigation />
            <Row className='justify-content-md-center'>
                {this.state.articles.map((data) =>
                    <Col key={data.id} id={data.id} sm="12" lg="8" className="article">
                        <img className="img-articleCard" src={"http://localhost:1337" + data.attributes.image.data.attributes.url} alt={data.attributes.image.data.attributes.name} />
                        <h2 >{data.attributes.title}</h2>
                        <p>{data.attributes.text}</p>
                        <h5>
                            Par {data.attributes.author},
                            le {data.attributes.date}
                        </h5>
                    </Col>
                )}
            </Row>
            <Footer />
        </>);
    }
}

export default Articles;