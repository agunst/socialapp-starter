import React from "react";
import { Link } from "react-router-dom";
import "./pages_css/NotFound.css";
import errorPets from './pages_pics/errorPets.jpg';

class NotFound extends React.Component {
  render() {
    return (
      <div className="ErrorPage">
        <img src={errorPets} alt="Sympathetic Pets" align="center" />
        <h3>Error 404: Page not Found</h3>
        <Link to="/">Go Home</Link>
      </div>
    );
  }
}

export default NotFound;