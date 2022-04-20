import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import './css/App.css';

import Acceuil from "./pages/Acceuil.jsx";
import Events from "./pages/Events.jsx";
import Articles from "./pages/Articles.jsx";
import Otakulture from "./pages/Otakulture.jsx";
import Account from "./pages/Account.jsx";
import Sign from "./pages/Sign.jsx";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: []
    }
  }

  setUserData = (userData) => {
    console.log(userData);
    this.setState({ user: userData });
    console.log(this.state.user);
  }

  getUserData = () => {
    console.log('getUserData');
    return this.state.user;

  }

  render() {
    return (
      <>
        <div className="app">
          <Router>
            <Routes>
              <Route exact path="/" element={<Acceuil />} getUserData={this.getUserData} />
              <Route exact path="/events" element={<Events />} getUserData={this.getUserData} />
              <Route exact path="/articles" element={<Articles />} getUserData={this.getUserData} />
              <Route exact path="/otakulture" element={<Otakulture />} getUserData={this.getUserData} />
              <Route exact path="/sign" element={<Sign />} setUserData={this.setUserData} getUserData={this.props.getUserData} />
              <Route exact path="/account" element={<Account />} getUserData={this.getUserData} />
            </Routes>
          </Router>
        </div>
      </>
    );
  }
}

export default App;
