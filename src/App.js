import React from "react";
import { Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ActivityPage from './pages/ActivityPage';
import RegisterNewUser from "./pages/RegisterNewUser";
import NotFound from "./pages/NotFound";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          component={Home}
        />
        <Route
          exact
          path="/profile/:username"
          component={Profile}
        />
        <Route
          exact
          path="/Register"
          component={RegisterNewUser}
        />
        <Route
          exact
          path="/activitypage"
          component={ActivityPage}
        />
        {/* ECS: You have 2 routes for NotFound */}
        <Route
          exact
          path="*"
          component={NotFound}
        />
        <Route
          exact
          path="*"
          component={NotFound}
        />
      </Switch>
    );
  }
}

export default App;