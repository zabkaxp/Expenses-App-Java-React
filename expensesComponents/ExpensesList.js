import React, { Component } from "react";
import ExpensesService from "../ExpensesService";
import AuthenticationService from "./AuthenticationService";

const userName = AuthenticationService.getUsername();
class ExpensesList extends Component {
  state = {
    income: [],
    outcome: []
  };
  editExpense = id => {
    this.props.history.push(`/expenses/${id}`);
  };
  removeExpense = id => {
    ExpensesService.deleteExpense(id, userName)
      .then(response => this.refreshExpenses())
      .catch(response => console.log("error deleting response" + response));
  };
  componentDidMount() {
    this.refreshExpenses();
  }

  refreshExpenses = () => {
    this.setState({
      income: [],
      outcome: []
    });
    ExpensesService.retrieveExpenses(userName)
      .then(response =>
        response.data.map(expense => {
          if (expense.type === "outcome") {
            this.setState({
              outcome: this.state.outcome.concat(expense)
            });
          } else if (expense.type === "income") {
            this.setState({
              income: this.state.income.concat(expense)
            });
          }
        })
      )
      .catch(response => console.log("error retriving data"));
  };
  render() {
    return (
      <div className="listContainer">
        <h1>Expenses App</h1>
        <div className="tablesContainer">
          <div>
            <div className="expensesHeader">
              <div>Income</div>
              <i className="fas fa-plus-circle" />
            </div>
            <table>
              <tbody>
                <tr>
                  <td>Description</td>
                  <td>Amount</td>
                </tr>

                {this.state.income.map(expense => (
                  <tr key={expense.id}>
                    <td>{expense.description}</td>
                    <td className="expenseBox">
                      <div>&euro; {expense.amount}</div>
                      <div>
                        <i
                          onClick={() =>
                            this.editExpense(
                              expense.id,
                              expense.description,
                              expense.amount
                            )
                          }
                          className="fas fa-edit"
                        />
                        <i
                          onClick={() => this.removeExpense(expense.id)}
                          className="fas fa-trash-alt"
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <div className="expensesHeader">
              <div>Outcome</div>
              <i className="fas fa-plus-circle" />
            </div>

            <table>
              <tbody>
                <tr>
                  <td>Description</td>
                  <td>Amount</td>
                </tr>

                {this.state.outcome.map(expense => (
                  <tr key={expense.id}>
                    <td>{expense.description}</td>
                    <td className="expenseBox">
                      <div>&euro; {expense.amount}</div>
                      <div>
                        <i
                          onClick={() =>
                            this.editExpense(
                              expense.id,
                              expense.description,
                              expense.amount
                            )
                          }
                          className="fas fa-edit"
                        />{" "}
                        <i
                          onClick={() => this.removeExpense(expense.id)}
                          className="fas fa-trash-alt"
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ExpensesList;
