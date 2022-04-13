import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom"
import { Navbar, Nav, Container, Button } from "react-bootstrap"
import { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Form } from "react-bootstrap";


import '../css/sign.css';

function Sign (props) {
    
    const [Firstname, setFirstname] = useState("");
    const [Name, setName] = useState("");
    const [Username, setUsername] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const history = useNavigate()
    const { setActiveUser, setLoggedIn } = props;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const reqBody = {
          Firstname: Firstname,
          Name: Name,
          Pseudo: Username,
          Email: Email,
          Password: Password,
        };
        const res = await axios.post(
            "http://localhost:1337/users-details",
            reqBody
          );
          if (res.statusText === "OK") {
            setActiveUser(res.data);
            setLoggedIn(true);
            history.push('/')
          }
        };


        return (

            <>
                <Navigation />

                <Row>

                    <Col className="leftt" lg={{ span: 3, offset: 2 }}>
                        <Form onSubmit={(e) => handleSubmit(e)}>
                            <h2 className="text">Nouveau sur <br /> KATOCHI ?</h2>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Control onChange={(e) => setFirstname(e.target.value)} name="Firstname" type="text" placeholder="Nom" />

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Control onChange={(e) => setName(e.target.value)} name="Name" type="text" placeholder="Prénom" />

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Control onChange={(e) => setUsername(e.target.value)} name="Username" type="text" placeholder="Pseudo" />

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control onChange={(e) => setEmail(e.target.value)} name="Email" type="email" placeholder="Adresse mail" />

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Control onChange={(e) => setPassword(e.target.value)} name="Password" type="password" placeholder="Mot de passe" />

                            </Form.Group>
                            <Form.Group className="checkbox mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Se souvenir de moi" />
                            </Form.Group>
                            <div class="text-center">
                                <Button className='' variant="secondary" type="submit">
                                    Je crée un compte
                                </Button>
                            </div>

                        </Form>

                    </Col>
                    <Col className="rightt" lg={{ span: 3, offset: 2 }}>
                        <Form>
                            <h2 className="text">Déjà membre ?</h2>

                            <Form.Group className="mb-3" controlId="formBasicEmail">

                                <Form.Control type="text" placeholder="Adresse mail ou pseudo" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">

                                <Form.Control type="password" placeholder="Mot de passe" />
                            </Form.Group>
                            <div className="text-center">

                                <Button className='' variant="secondary" type="submit">
                                    Se connecter
                                </Button>
                            </div>
                        </Form>
                    </Col>

                </Row>
            

                <Footer />
            </>
        );

    } 
    export default Sign;