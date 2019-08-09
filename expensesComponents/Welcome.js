import React from "react";
import AuthenticationService from "./AuthenticationService";

const Welcome = () => {
  const name = AuthenticationService.getUsername();
  return <h1 className="welcome">{`Welcome to the expenses app ${name}!`}</h1>;
};

export default Welcome;
