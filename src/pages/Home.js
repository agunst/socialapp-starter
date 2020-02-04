import React from "react";
import LoginForm from "../components/LoginForm";
import Menu from "../components/Menu";
import { userIsNotAuthenticated } from "../HOCs";
import "./pages_css/Home.css";

class Home extends React.Component {
  render() {
    return (
      // The <> and </> tags are used as short syntax for a React Fragment.
      <>
        <div className="MainSpace">
          <Menu />
          <h4>Your pet's favorite microblogging platform</h4>
          <br />
          <br />
          <div className="LoginSpace">
            <LoginForm />
          </div>
        </div>
      </>
    );
  }
}

export default userIsNotAuthenticated(Home);