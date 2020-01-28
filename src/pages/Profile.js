import React from "react";

import Menu from "../components/Menu";



import { userIsAuthenticated } from "../HOCs";

class Profile extends React.Component {
  render() {
    return (
      <>
        
        
          <Menu isAuthenticated={this.props.isAuthenticated} />
          
        

      </>
    );
  }
}

export default userIsAuthenticated(Profile);
