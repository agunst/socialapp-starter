import React from "react";

import Menu from "../components/Menu";
import { userIsAuthenticated } from "../HOCs";
import UserProfile from "../components/userProfile/UserProfile"
import { Link } from 'react-router-dom';
import { Route, Switch } from "react-router-dom";
import "./pages_css/profile.css";


import HerokuappService from "../ApiService";

import kitty2_icon from './pages_pics/kitty2_icon.jpg';
import doggy2_icon from './pages_pics/doggy2_icon.jpg';



class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.client = new HerokuappService();
    this.state = {
      users: [],
      userData: {},
      isLoaded: false,


    }
  }

  getUser() {
    const loginData = JSON.parse(localStorage.getItem("login"));
    return this.client.getUser(loginData.result.username).then(result => {
      console.log(result.data, "individualUser")
      this.setState({
        userData: result.data
      })
    })
  }

  getUsers() {
    return this.client.getUsers().then(result => {
      console.log(result.data, "all the users")
      this.setState({
        users: result.data
      })
    })
  }

  handleChange = (event) => {
    let userData = this.state.userData.user;
    userData[event.target.name] = event.target.value;
    this.setState({ userData });
  }

  handleSubmit = (event) => {
    event.preventDefault();

  }

  componentDidMount() {
    this.getUser();
    //this.getUsers();
  }

  render() {

    return (
      <div className="PageAll">
        <div className="MenuBar">
          <Menu isAuthenticated={this.props.isAuthenticated} />
        </div>

        <div className="Content">

          <div className="LeftSideColumn">
            <img src={kitty2_icon} alt="happy cat" align="right" />
          </div>

          <div className="ProfileColumn">


            <div className="ProfileInfo">
              <h2>{this.state.userData.user && this.state.userData.user.username}</h2>
              <UserProfile
                picture={this.state.userData.user && this.state.userData.user.pictureLocation}
                // userData={this.state.userData.user}
                // username={this.state.userData.user && this.state.userData.user.username}
                // displayName={this.state.userData.user && this.state.userData.user.displayName}
                about={this.state.userData.user && this.state.userData.user.about}
              />
              <br /><br />
              <h3>Update your Profile </h3>

              <form className="update-profile">
                <label>
                  Display Name:
            <input className="display-name" type="text" name="displayName" />
                </label>
                <br />
                <label>
                  About:
            <input className="about" type="text" name="about" />
                </label>
                <br />
                <label>
                  Password:
            <input className="password" type="text" name="password" />
                </label>
                <br />
                <input className="loginButton2" type="submit" value="Submit" />
              </form>
            </div>
          </div>

          <div className="RightSideColumn">
            <img src={doggy2_icon} alt="happy dog" align="left" />
          </div >

        </div>
      </div>

    );
  }
}

export default userIsAuthenticated(Profile);
    /*
      pictureLocation: "",
      username: "",
      displayName: "",
      about: "",
      googleId: "",
      createdAt: "",
      updatedAt: ""
*/