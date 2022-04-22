import React from "react"
import { Link } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"
import '../sass/App.scss';
import '../css/ArticleCard.css';
import { Component } from "react";

class ArticleCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            article: {},
            loading: true
        };
    }

    componentDidMount = async () => {
        const response = await fetch('http://localhost:1337/api/article-tables/' + this.props.articleId + '?populate=*', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        const article = await response.json();

        this.setState({
            article: article.data,
            loading: false
        });
    }

    render() {

        if (this.state.loading) {
            return (
                <Col className="Card">
                    <h2>Article En cours de chargement...</h2>
                    <p>...</p>

                    <div className="button-div">
                        <Link to={"/articles"}><button type="button" className="card-button">Lire l'article</button></Link>
                    </div>
                </Col>
            )
        }

        return (
            <Col id="Card" className="Card">
                <img className="img-articleCard" src={"http://localhost:1337" + this.state.article.attributes.image.data.attributes.url} alt="placeholder" />
                <h2>{this.state.article.attributes.title}</h2>
                <p>{this.state.article.attributes.text}</p>
                <h5>
                    Par {this.state.article.attributes.author},
                    le {this.state.article.attributes.date}
                </h5>
                <Link to={"/articles#"+this.props.articleId}>
                <div id="CardButton" className="button-div">
                    <div id="card-button-insider" type="button" className="card-button">Lire l'article</div>
                </div>
                </Link>
            </Col>
        )
    }

} export default ArticleCard