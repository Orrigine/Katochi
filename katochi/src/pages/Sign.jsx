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


function Sign(props) {
    const [userInfo, setUserInfo] = useState({
        lastName: "",
        firstName: "",
        username: "",
        email: "",
        password: "",


    })
    // const [firstName, setFirstname] = useState(0);
    // const [lastName, setName] = useState(0);
    // const [username, setUsername] = useState(0);
    // const [email, setEmail] = useState(0);
    // const [password, setPassword] = useState(0);

    const navigate = useNavigate();
    const { setActiveUser, setLoggedIn } = props;

    const handleChange = (e)  => {
        e.preventDefault();
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(userInfo);
        setUserInfo({lastName:"", firstName:"", username:"", email:"", password:""});

        

        // const request = userInfo;
        axios.post('http://localhost:1337/api/user-tables', {
            "data": {
                firstName:userInfo.firstName,
                lastName:userInfo.lastName,
                username:userInfo.username,
                email:userInfo.email,
                password:userInfo.password
            }
           
            })
        .then((response) => {
            // Handle success.
            console.log(response)
            console.log("Success!");
            // console.log('User profile', response.data.username);
            // console.log('User token', response.data.jwt);
          })
          .catch((error) => {
            // Handle error.
            console.log('An error occurred:', error.response);
          });
    };


    return (

        <>
            <Navigation />

            <Row>

                <Col className="leftt" lg={{ span: 3, offset: 2 }}>
                    <Form onSubmit={(e) => handleSubmit(e)}>
                        <h2 className="text">Nouveau sur <br /> KATOCHI ?</h2>
                        <Form.Group className="mb-3" controlId="">
                            <Form.Control onChange={(e) => handleChange(e)} value={userInfo.firstName} name="firstName" type="text" placeholder="Nom" />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="">
                            <Form.Control onChange={(e) => handleChange(e)} value={userInfo.lastName} name="lastName" type="text" placeholder="Prénom" />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="">
                            <Form.Control onChange={(e) => handleChange(e)} value={userInfo.username} name="username" type="text" placeholder="Pseudo" />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control onChange={(e) => handleChange(e)} value={userInfo.email} name="email" type="email" placeholder="Adresse mail" />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="">
                            <Form.Control onChange={(e) => handleChange(e)} value={userInfo.password} name="password" type="password" placeholder="Mot de passe" />

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
                        <Form.Group className="mb-3" controlId="formBasicPassword">

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