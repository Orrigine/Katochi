import React, { Component, createContext, useContext } from 'react';
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


const ThemeContext = createContext(
)
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            theme: "dark"
        }
    }

    render() {


        // const THEMES = {
        //     dark: {
        //         background: '#000',
        //         color: '#fff',
        //     },
        //     light: {
        //         background: 'var(--yellow1)',   
        //         color: '#000',

        //     }

        // }
        // const ThemeContext = createContext({
        //     theme: THEMES.dark,
        //     toggleTheme: () => { }
        // })

        // // const toggleTheme = () => {

        // // }
        // const value = this.context
        // console.log( "value context",value);

        // const toggleTheme = () => {
        //     console.log("changed");
        //     console.log("theme before:",this.state.theme)
        //     let test = this.state.theme === 'light' ? 'light' : 'dark'
        //     console.log("theme after:",this.state.theme)
        //     return this.setState({ theme: test })
        // }
        // const currentTheme = this.state.theme === 'light' ? THEMES.light : THEMES.dark;

        // const getTheme = () => {
        //     return this.state.theme;
        // }

        // console.log(this.context)

        return (

            <>
                <div className="app">
                    <ThemeProvider>

                        {/* <ThemeContext.Provider value={currentTheme}>
                        <button onClick={toggleTheme}>Changer Theme</button>
                        <button style={value}>Yes c'est moi</button> */}
                        <Router>
                            <Routes>
                                <Route exact path="/" element={<Acceuil getTheme={() => this.getTheme} theme={this.state.theme} toggleTheme={() => this.toggleTheme}/>} />
                                <Route exact path="/events" element={<Events getTheme={() => this.getTheme} theme={this.state.theme} toggleTheme={() => this.toggleTheme}/>} />
                                <Route exact path="/articles" element={<Articles getTheme={() => this.getTheme} theme={this.state.theme} toggleTheme={() => this.toggleTheme}/>} />
                                <Route exact path="/otakulture" element={<Otakulture getTheme={() => this.getTheme} theme={this.state.theme} toggleTheme={() => this.toggleTheme}/>} />
                                <Route exact path="/sign" element={<Sign getTheme={() => this.getTheme} theme={this.state.theme} toggleTheme={() => this.toggleTheme}/>} />
                                <Route exact path="/account" element={<Account getTheme={() => this.getTheme} theme={this.state.theme} toggleTheme={() => this.toggleTheme}/>} />
                            </Routes>
                        </Router>
                    </ThemeProvider>
                    {/* </ThemeContext.Provider> */}
                </div>
            </>
        );
    }
}

// function ThemeSwitcher ()  {
//     const {toggleTheme} = useContext(ThemeContext)

// }

export default App;


export class ThemeButton extends Component {

    componentDidMount() {
        //console.log("context: ", this.context)
    }
    render() {
        //console.log("context: ", this.context)
        return (
            <div className="ThemeButton">
                <>
                    <ThemeContext.Consumer>
                        {(context) => (
                            // <React.Fragment>
                            <>
                                <p>Theme: {context.state.theme}</p>
                                {/* <p>Name: {context.state.name}</p> */}
                                <button onClick={context.growAYearOlder}>Change theme</button>
                            </>

                        )}
                    </ThemeContext.Consumer>
                </>
            </div>
        )
    }
}
ThemeButton.contextType = ThemeContext;


// export const ThemeButton = (props) => (
//     <div className="ThemeButton">
//         <ThemeButton />
//     </div>
// )

export class ThemeProvider extends Component {
    state = {
        theme: "dark",
    }

    render() {
        return (

            <ThemeContext.Provider value={{ state: this.state, age: this.state.age, theme: this.state.theme }}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }

}


