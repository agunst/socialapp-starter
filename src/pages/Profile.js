import React from "react";

import Menu from "../components/Menu";



import { userIsAuthenticated } from "../HOCs";

class Profile extends React.Component {
  render() {
    return (
      <>
        
        <div className="NavigationBar">
          <Menu isAuthenticated={this.props.isAuthenticated} />
          
        </div>

      </>
    );
  }
}

export default userIsAuthenticated(Profile);
