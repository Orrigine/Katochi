import axios from "axios";
import { Component, useState, useRef } from "react";
import React from "react";
import { Button, Form, Row, Col } from "react-bootstrap";

import { useNavigate } from "react-router";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

import '../css/sign.css';



class Sign extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: [],
        };
    }

    render() {
        return (

            <>
                <Navigation getTheme={() => this.getTheme} toggleTheme={() => this.props.toggleTheme()} />

                <Row>
                    <Col className="leftt" lg={{ span: 3, offset: 2 }}>
                        <Register />
                    </Col>
                    <Col className="rightt" lg={{ span: 3, offset: 2 }}>
                        <Connexion parentCallback={this.callbackFunction} />
                    </Col>

                </Row>
                <div class="footer-test">
                    <Footer />

                </div>
            </>
        )
    }
} export default Sign

export function Register(props) {
    const navigate = useNavigate();
    const [userRegisterInfo, setuserRegisterInfo] = useState({
        lastName: "",
        firstName: "",
        username: "",
        email: "",
        password: "",
        rememberMe: null
    })
    const [rememberRegister, setrememberRegister] = useState(false);
    const [ErrorRegisterMessage, setErrorRegisterMessage] = useState('');
    const [userData, setUserData] = useState('');

    const errorRegisterRef = useRef();




    const handleChange = (e) => {
        e.persist();
        // e.preventDefault();
        console.log(rememberRegister)
        setuserRegisterInfo({ ...userRegisterInfo, [e.target.name]: e.target.value })
        setrememberRegister(e.target.checked);
    }


    const handleSubmitRegister = async (e) => {
        console.log(rememberRegister)
        e.preventDefault();
        setuserRegisterInfo({ lastName: "", firstName: "", username: "", email: "", password: "" });



        axios.post('http://localhost:1337/api/auth/local/register', {

            firstName: userRegisterInfo.firstName,
            lastName: userRegisterInfo.lastName,
            username: userRegisterInfo.username,
            email: userRegisterInfo.email,
            password: userRegisterInfo.password,
            rememberMe: rememberRegister


        })
            .then((response) => {
                // Handle success.
                if (response?.status === 200) {
                    let userInformations = { user: response.data.user, token: response.data.token };
                    console.log(userInformations)

                    saveUser(response);
                    navigate("/");
                }
                console.log(response)

            })

            .catch((error) => {
                // Handle error.
                if (!error.response) {
                    setErrorRegisterMessage('Aucune réponse du serveur. Désolé :/')
                } else if (error.response.status === 400) {
                    setErrorRegisterMessage('Un champ est invalide ou manquant')
                } else if (error.response.status === 401) {
                    setErrorRegisterMessage("Tu n'es pas authorisé à faire cela")
                } else if (error.response.data.error.message === "Email is already taken") {
                    setErrorRegisterMessage('Cet email est déjà utilisé')
                }
                console.log('An error occurred:', error.response);

            });
    };

    return (

        <>
            <Form onSubmit={(e) => handleSubmitRegister(e)}>
                <h2 className="text">Nouveau sur <br /> KATOCHI ?</h2>
                <Form.Group className="mb-3" controlId="1">
                    <Form.Control onChange={(e) => handleChange(e)} value={userRegisterInfo.firstName} name="firstName" type="text" placeholder="Nom" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="2">
                    <Form.Control onChange={(e) => handleChange(e)} value={userRegisterInfo.lastName} name="lastName" type="text" placeholder="Prénom" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="3">
                    <Form.Control onChange={(e) => handleChange(e)} value={userRegisterInfo.username} name="username" type="text" placeholder="Pseudo" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="4">
                    <Form.Control onChange={(e) => handleChange(e)} value={userRegisterInfo.email} name="email" type="email" placeholder="Adresse mail" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="5">
                    <Form.Control onChange={(e) => handleChange(e)} value={userRegisterInfo.password} name="password" type="password" placeholder="Mot de passe" />
                </Form.Group>
                <Form.Group className="checkbox mb-3" controlId="formBasicCheckbox1">
                    <Form.Check onChange={(e) => handleChange(e)} checked={rememberRegister} name="checkbox" type="checkbox" label="Se souvenir de moi" />
                </Form.Group>
                <div className="text-center">
                    <p ref={errorRegisterRef} className={ErrorRegisterMessage ? "errorMessage" : "offscreen"} aria-live="assertive">{ErrorRegisterMessage}</p>
                    <Button className='' variant="secondary" type="submit">
                        Je crée un compte
                    </Button>
                </div>

            </Form>
        </>
    );

};


export function Connexion(props) {
    const navigate = useNavigate();
    const [userConnexionInfo, setuserConnexionInfo] = useState({
        identifier: "",
        password: "",
    })
    const [rememberLogin, setRememberLogin] = useState(false);
    const [ErrorConnexionMessage, setErrorConnexionMessage] = useState('');


    const errorConnexionRef = useRef();

    const handleChangeLogin = (e) => {
        e.persist();
        setuserConnexionInfo({ ...userConnexionInfo, [e.target.name]: e.target.value })
        setRememberLogin(e.target.checked);
        console.log(rememberLogin)
    }
    const handleSubmitConnexion = async (e) => {
        e.preventDefault();
        console.log(userConnexionInfo)
        setuserConnexionInfo({ identifier: "", password: "" });

        axios.post('http://localhost:1337/api/auth/local?populate=*', {

            identifier: userConnexionInfo.identifier,
            password: userConnexionInfo.password,
            rememberMe: rememberLogin

        })
            .then((response) => {
                // Handle success.
                if (response?.status === 200) {
                    saveUser(response);
                    navigate("/");
                }
            })

            .catch((error) => {
                // Handle error.
                if (!error.response) {
                    setErrorConnexionMessage('Aucune réponse du serveur. Désolé :/')
                } else if (error.response.status === 400) {
                    setErrorConnexionMessage('Un champ est invalide ou manquant')
                } else if (error.response.status === 401) {
                    setErrorConnexionMessage("Tu n'es pas authorisé à faire cela")
                }
                else if (error.response.data.error.message === "Email is already taken") {
                    setErrorConnexionMessage('Cet email est déjà utilisé')
                }
                console.log('An error occurred:', error.response);
            });

    }

    return (
        <>
            <Form onSubmit={(e) => handleSubmitConnexion(e)}>
                <h2 className="text">Déjà membre ?</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control onChange={(e) => handleChangeLogin(e)} value={userConnexionInfo.identifier} name="identifier" type="text" placeholder="Adresse mail ou pseudo" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control onChange={(e) => handleChangeLogin(e)} value={userConnexionInfo.password} name="password" type="password" placeholder="Mot de passe" />
                </Form.Group>
                <Form.Group className="checkbox mb-3" controlId="formBasicCheckbox2">
                    <Form.Check onChange={(e) => handleChangeLogin(e)} checked={rememberLogin} type="checkbox" label="Se souvenir de moi" />
                </Form.Group>
                <div className="text-center">
                    <p ref={errorConnexionRef} className={ErrorConnexionMessage ? "errorMessage" : "offscreen"} aria-live="assertive">{ErrorConnexionMessage}</p>
                    <Button variant="secondary" type="submit">
                        Se connecter
                    </Button>
                </div>
            </Form>
            <Button primary="true" >Click Parent</Button>
        </>
    )

};


export function saveUser(response) {
    localStorage.setItem('token', response.data.jwt);
    localStorage.setItem('user', JSON.stringify(response.data.user));
};