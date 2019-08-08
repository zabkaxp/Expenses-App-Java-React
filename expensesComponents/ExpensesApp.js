import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";
import ExpensesList from "./ExpensesList";
import AuthenticatedRoute from "./AuthenticatedRoute";

const ExpensesApp = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/login" component={Login} />
          <AuthenticatedRoute path="/expenses" component={ExpensesList} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default ExpensesApp;
