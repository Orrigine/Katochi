import React, {
    Component
} from "react";
import Navigation from "../components/Navigation";
import Banner from "../img/event-banner.png";

class Events extends Component {
    render() {
        console.log(Banner);
        return (
            <>
                <Navigation />
                <img src={Banner} alt=""/>

            </>
        );
    }
}
export default Events;