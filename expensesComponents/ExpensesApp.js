import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";

const ExpensesApp = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route to="/login" component={Login} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default ExpensesApp;
