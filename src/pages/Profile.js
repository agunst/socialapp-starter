import React from "react";

import Menu from "../components/Menu";



import { userIsAuthenticated } from "../HOCs";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.client = new HerokuappService();
    this.state = {
      users: []
    
    }
  }
  getUsers() {
    return this.client.getUsers().then(result => {
      console.log(result.data, "all the users") 
      this.setState({
        users: result.data
      })
    })
  }

  render() {
    return (
      <>
        
        
          <Menu isAuthenticated={this.props.isAuthenticated} />
          
        

      </>
    );
  }
}

export default userIsAuthenticated(Profile);
