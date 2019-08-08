import React, { Component } from "react";
import ExpensesService from "../ExpensesService";
import AuthenticationService from "./AuthenticationService";

const userName = AuthenticationService.getUsername();
class ExpensesList extends Component {
  state = {
    income: [],
    outcome: []
  };

  componentDidMount() {
    ExpensesService.retrieveExpenses(userName)
      .then(response =>
        response.data.map(expense => {
          if (expense.type === "outcome") {
            console.log("saved as outcome");

            this.setState({
              outcome: this.state.outcome.concat(expense)
            });
          } else if (expense.type === "income") {
            console.log("saved as income");
            this.setState({
              income: this.state.income.concat(expense)
            });
          }
        })
      )
      .catch(response => console.log("error retriving data"));
  }
  render() {
    console.log(this.state.income);
    console.log(this.state.outcome);
    return (
      <div className="listContainer">
        <h1>Expenses App</h1>
        <div className="tablesContainer">
          <div>
            <h4>Income</h4>
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
                        <i class="fas fa-edit" /> <i class="fas fa-trash-alt" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <h4>Outcome</h4>

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
                        <i class="fas fa-edit" /> <i class="fas fa-trash-alt" />
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
