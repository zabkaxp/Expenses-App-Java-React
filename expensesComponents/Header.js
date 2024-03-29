import React, { Component } from "react";
import AuthenticationService from "./AuthenticationService";
import { Link } from "react-router-dom";

let loggedIn = AuthenticationService.isUserLoggedIn();
class Header extends Component {
  logout = () => {
    AuthenticationService.logOut();
  };

  login = () => {
    this.props.history.push("/login");
  };

  render() {
    return (
      <div className="headerContainer">
        <ul>
          <li>
            <Link to="/welcome">About</Link>
          </li>
          {loggedIn && (
            <li>
              <Link to="/expenses">Expenses App</Link>
            </li>
          )}
        </ul>

        <ul>
          <li>
            {loggedIn ? (
              <div onClick={this.logout}>Logout</div>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
