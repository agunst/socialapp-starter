import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ActivityPage from './pages/ActivityPage';
import NotFound from "./pages/NotFound";
import 'bootstrap/dist/css/bootstrap.min.css';
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
            path="/activitypage"
            component={ActivityPage}
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
