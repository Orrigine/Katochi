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
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         theme: "",
    //         loggedIn: false,
    //         userData: {}
    //     }

    //     // if (localStorage.getItem("theme")) {
    //     //     this.state = { theme: localStorage.getItem('theme') }
    //     // }
    // }
    // componentDidMount = () => {
    //     const user = JSON.parse(localStorage.getItem("user"));
    //     if (user) {
    //         this.setState({
    //             loggedIn: true,
    //             userData: user
    //         })
    //     }
    // }

    const { theme } = useContext(ThemeContext);
   

    // localStorage.setItem("theme", 'light');
    // const switchTheme = () => {
    //     const newTheme = this.state.theme === 'dark' ? 'light' : 'dark';
    //     this.setState({ theme: newTheme })
    //     localStorage.setItem("theme", this.state.theme);
    //     console.log("changing to", localStorage.getItem("theme"))
    //     console.log(localStorage.getItem("theme"));
    // }

  
    return (
        <>
            {/* <Provider store={store}> */}
                <div id="app" data-theme={theme}>
                    {/* <button onClick={() => switchTheme()}>Change theme</button> */}

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
            {/* </Provider> */}

        </>
    );


}









