import React from "react";
import Menu from "../components/Menu";
import { userIsAuthenticated } from "../HOCs";
import UserProfile from "../components/userProfile/UserProfile"
import { Link } from 'react-router-dom';
import { Route, Switch } from "react-router-dom";
import HerokuappService from "../ApiService";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.client = new HerokuappService();
    this.state = {
      users: [],
      userData: {},
      isLoaded: false
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

 
  componentDidMount() {
    this.getUser();
    //this.getUsers();
  } 

  render() {
    
    return (
      <div>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>

        <div>
          <UserProfile
            picture={this.state.userData.user && this.state.userData.user.pictureLocation}
            userData={this.state.userData.user} 
            username={this.state.userData.user && this.state.userData.user.username}
            displayName={this.state.userData.user && this.state.userData.user.displayName}
          />
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