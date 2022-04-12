import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import './css/App.css';

import Acceuil from "./pages/Acceuil.js"
import Events from "./pages/Events.js"
import Twitch from "./pages/Twitch.js"
import Articles from "./pages/Articles.js"
import Otakulture from "./pages/Otakulture.js"
import Account from "./pages/Account.js"

class App extends Component {
    render(){
      return(
        <div className="app">
          <Router>
            <Routes>
              <Route exact path="/" element={<Acceuil />} />
              <Route exact path="/events" element={<Events />} />
              <Route exact path="/twitch" element={<Twitch />} />
              <Route exact path="/articles" element={<Articles />} />
              <Route exact path="/otakulture" element={<Otakulture />} />
              <Route exact path="/account" element={<Account />} />
            </Routes>
          </Router>
        </div>
      );
    }
}

export default App;
