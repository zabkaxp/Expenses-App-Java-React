import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
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

  validate = values => {
    let errors = {};
    if (!values.description) {
      errors.description = "Enter a Description";
    } else if (values.description.length < 5) {
      errors.description = "Enter atleast 5 Characters in Description";
    } else if (!values.amount) {
      errors.amount = "Enter a valid amount";
    } else if (!values.type) {
      errors.type = "Enter a valid type";
    }

    return errors;
  };

  onSubmit = values => {
    if (this.state.id > 0) {
      ExpensesService.editExpense(this.state.id, userName, {
        id: this.state.id,
        description: values.description,
        amount: values.amount,
        type: values.type
      }).then(() => this.props.history.push("/expenses"));
    } else {
      ExpensesService.addExpense(userName, {
        description: values.description,
        amount: values.amount,
        type: values.type
      }).then(() => this.props.history.push("/expenses"));
    }
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
    let { description, amount, type } = this.state;
    return (
      <div>
        <h1>Edit expense</h1>
        <div className="container">
          <Formik
            initialValues={{ description, amount, type }}
            onSubmit={this.onSubmit}
            validateOnChange={false}
            validateOnBlur={false}
            validate={this.validate}
            enableReinitialize={true}
          >
            {props => (
              <Form className="formikForm">
                <ErrorMessage name="description" component="div" />
                <ErrorMessage name="amount" component="div" />
                <ErrorMessage name="type" component="div" />
                <fieldset>
                  <label>Description</label>
                  <Field type="text" name="description" />
                </fieldset>
                <fieldset>
                  <label>Amount</label>
                  <Field type="number" name="amount" />
                </fieldset>
                <fieldset>
                  <label>Type</label>
                  <Field component="select" name="type">
                    <option>Choose type</option>
                    <option value="income">income</option>
                    <option value="outcome">outcome</option>
                  </Field>
                </fieldset>
                <button className="loginSubmit" type="submit">
                  Save
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}

export default Expense;
