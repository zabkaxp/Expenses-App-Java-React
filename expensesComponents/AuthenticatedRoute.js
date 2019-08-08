import React, { Component } from "react";
import Authentication from "./AuthenticationService";
import { Route, Redirect } from "react-router-dom";

class AuthenticatedRoute extends Component {
  render() {
    const user = Authentication.isUserLoggedIn();
    console.log(user);
    if (user) {
      return (
        <div>
          <Route {...this.props} />
        </div>
      );
    } else {
      return (
        <div>
          <Redirect to="/login" />
        </div>
      );
    }
  }
}

export default AuthenticatedRoute;
