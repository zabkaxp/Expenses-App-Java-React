import React, { Component } from "react";
import AuthenticationService from "./AuthenticationService";

class Login extends Component {
  state = {
    login: "",
    password: "",
    message: ""
  };

  loginSubmit = e => {
    if (this.state.login === "marta" && this.state.password === "password") {
      this.props.history.push("/");
      window.location.reload(true);
      AuthenticationService.setSession(this.state.login);
    } else {
      e.preventDefault();
      this.setState({
        message: "Invalid credentials, please try again",
        password: "",
        login: ""
      });
    }
  };

  loginChange = e => {
    this.setState({
      login: e.target.value,
      message: ""
    });
  };
  passwordChange = e => {
    this.setState({
      password: e.target.value,
      message: ""
    });
  };
  render() {
    return (
      <div>
        <form className="loginContainer">
          <h1>Login to see your recent expenses!</h1>
          {this.state.message && (
            <div className="invalidMessage">{this.state.message}</div>
          )}
          <div>
            <label htmlFor="login">Login</label>
            <input
              value={this.state.login}
              onChange={this.loginChange}
              id="login"
              type="login"
              placeholder="Enter your login"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={this.state.password}
              onChange={this.passwordChange}
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <button className="loginSubmit" onClick={this.loginSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
