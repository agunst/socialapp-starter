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
      console.log(result.data) //works here
      this.setState({
        users: result.data
      })
    })
  }

  componentDidMount() {
    this.getUser();
  }

  render() {

   
    return (
      <div>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        {
        this.users // does not work here
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