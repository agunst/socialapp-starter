import React from "react";
import { Link } from "react-router-dom";
import { withAsyncAction } from "../HOCs";
import socialPetwork2 from './pics/socialPetwork2.jpg'
import background from './pics/background.jpg'
import './components_css/Menu.css';

class Menu extends React.Component {
  handleLogout = event => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    // // Console.log statement used to check isAuthenticated
    // console.log(this.props)
    return (
      <div className="NavigationBar" style={{ backgroundImage: `url(${background})` }}>
        <div className="Petwork">
          <img src={socialPetwork2} alt="The Social Petwork" />
        </div>
        {this.props.isAuthenticated && (
          <div className="Hyperlinks">
            <Link to="/activitypage">Message Feed</Link>
            <Link to="/profile/:username">My Profile</Link>
            <Link to="/" onClick={this.handleLogout}>Logout</Link>
          </div>
        )}
      </div>
    );
  }
}

export default withAsyncAction("auth", "logout")(Menu);