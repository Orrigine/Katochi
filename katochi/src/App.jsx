import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import './css/App.css';

import Acceuil from "./pages/Acceuil.jsx";
import Events from "./pages/Events.jsx";
import Twitch from "./pages/Twitch.jsx";
import Articles from "./pages/Articles.jsx";
import Otakulture from "./pages/Otakulture.jsx";
import Account from "./pages/Account.jsx";
import Sign from "./pages/Sign.jsx";

class App extends Component {
    render(){
      return(
      <>
          <div className="app">
            <Router>
                <Routes>
                  <Route exact path="/" element={<Acceuil />} />
                  <Route exact path="/events" element={<Events />} />
                  <Route exact path="/twitch" element={<Twitch />} />
                  <Route exact path="/articles" element={<Articles />} />
                  <Route exact path="/otakulture" element={<Otakulture />} />
                  <Route exact path="/sign" element={<Sign />} />
                  <Route exact path="/account" element={<Account />} />
                </Routes>
            </Router>
          </div>
        </>
      );
    }
}

export default App;
