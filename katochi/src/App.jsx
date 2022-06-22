import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';



import { ThemeContext } from "./theme/themeContext";


import './sass/App.scss';
import './fonts/AdigianaUI.ttf'


import './sass/App.scss';
import './css/navbar.css';


import Acceuil from "./pages/Acceuil.jsx";
import Events from "./pages/Events.jsx";
import Articles from "./pages/Articles.jsx";
import Otakulture from "./pages/Otakulture.jsx";
import Account from "./pages/Account.jsx";
import Sign from "./pages/Sign.jsx";

export default function App() {

    const { theme } = useContext(ThemeContext);
   
    

  
    return (
        <>
                <div id="app" data-theme={theme}>

                    <Router>
                        <Routes>
                            <Route exact path="/" element={<Acceuil />} />
                            <Route exact path="/events" element={<Events />} />
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









