import React, { Component } from "react";
import formik from "formik";
import ExpensesService from "../ExpensesService";
import AuthenticationService from "./AuthenticationService";

const userName = AuthenticationService.getUsername();
class Expense extends Component {
  state = {
    id: this.props.match.params.id,
    description: "",
    amount: "",
    type: ""
  };

  componentDidMount() {
    ExpensesService.retrieveExpense(this.state.id, userName).then(response =>
      this.setState({
        description: response.data.description,
        amount: response.data.amount,
        type: response.data.type
      })
    );
  }
  render() {
    return <div>{this.props.match.params.id}</div>;
  }
}

export default Expense;
