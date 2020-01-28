import React from 'react'
import { Link } from "react-router-dom";
import { withAsyncAction } from "../HOCs";

import socialPetwork from './pics/socialPetwork.jpg'
import background from './pics/background.jpg'

import "./components_css/NavigationBar.css"

class NavigationBar extends React.Component {
    handleLogout = event => {
        event.preventDefault();
        this.props.logout();
    };

    render() {
        return (
            <div className="NavigationBar" style={{ backgroundImage: `url(${background})` }}>
                <div className="Petwork">
                    <img src={socialPetwork} alt="The Social Petwork" />
                </div>

                {this.props.isAuthenticated && (
                    <div className="Hyperlinks">
                        <Link to="/activitypage">Message Feed</Link>
                        <Link to="/profile/{:username}">My Profile</Link>
                        <Link to="/">Logout</Link>
                        <p>Message Feed</p>
                        <p>My Profile</p>
                        <p>Logout</p>
                    </div>
                )}
            </div>
        );
    }
}

export default NavigationBar