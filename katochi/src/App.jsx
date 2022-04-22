import React, { Component, createContext, useContext } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';
import './sass/App.scss';

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
            theme: "dark",
        }

        if (localStorage.getItem("prefers-theme")) {
            this.state = { theme: localStorage.getItem('prefers-theme') }
        }
    }

    render() {
        
        const switchTheme = () => {
            const newTheme = this.state.theme === 'dark' ? 'light' : 'dark';
            this.setState({ theme: newTheme })
            localStorage.setItem("prefers-theme", this.state.theme);
            console.log("changing to", localStorage.getItem("prefers-theme"))

        }

        return (

            <>
                <div className="app" data-theme={this.state.theme}>
                    <button onClick={() => switchTheme()}>Change theme</button>
                    <Router>
                        <Routes>
                            <Route exact path="/" element={<Acceuil switchTheme={() => this.switchTheme} theme={this.state.theme} toggleTheme={() => this.toggleTheme} />} />
                            <Route exact path="/events" element={<Events switchTheme={() => this.switchTheme} theme={this.state.theme} toggleTheme={() => this.toggleTheme} />} />
                            <Route exact path="/articles" element={<Articles switchTheme={() => this.switchTheme} theme={this.state.theme} toggleTheme={() => this.toggleTheme} />} />
                            <Route exact path="/otakulture" element={<Otakulture switchTheme={() => this.switchTheme} theme={this.state.theme} toggleTheme={() => this.toggleTheme} />} />
                            <Route exact path="/sign" element={<Sign switchTheme={() => this.switchTheme} theme={this.state.theme} toggleTheme={() => this.toggleTheme} />} />
                            <Route exact path="/account" element={<Account switchTheme={() => this.switchTheme} theme={this.state.theme} toggleTheme={() => this.toggleTheme} />} />
                        </Routes>
                    </Router>
                </div>

            </>
        );
    }
}

export default App;









