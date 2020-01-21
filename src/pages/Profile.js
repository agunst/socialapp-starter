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
      userData: {}
    }
  }
  
  getUser() {
    return this.client.getUsers().then(result => {
      console.log(result.data) 
      this.setState({
        users: result.data
      })
    })
  }

  componentDidMount() {
    this.getUser();
  }

  render() {
    console.log("href" + window.location.href)
    console.log("pathname" + window.location.pathname)
   
    return (
      <div>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        {
        this.users 
        } 
          
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