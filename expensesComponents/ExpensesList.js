import React, { Component } from "react";
import ExpensesService from "../ExpensesService";
import AuthenticationService from "./AuthenticationService";

const userName = AuthenticationService.getUsername();
class ExpensesList extends Component {
  state = {
    income: [],
    outcome: [],
    total: 0
  };

  addExpense = type => {
    this.props.history.push(`/expenses/-1`);
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
  calculateTotals = () => {
    this.setState({ total: 0 });
    let incomeTotal = 0;
    let outcomeTotal = 0;
    this.state.income.map(
      income => (incomeTotal = incomeTotal + income.amount)
    );
    this.state.outcome.map(
      outcome => (outcomeTotal = outcomeTotal + outcome.amount)
    );
    const total = incomeTotal - outcomeTotal;
    this.setState({ total });
  };
  refreshExpenses = () => {
    this.setState({
      income: [],
      outcome: [],
      total: 0
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
      .then(response => this.calculateTotals())
      .catch(response => console.log("error retriving data"));
  };
  render() {
    return (
      <div className="listContainer">
        <h1>Total available: &euro;{this.state.total}</h1>
        <div className="tablesContainer">
          <div>
            <div className="expensesHeader">
              <div>Income</div>
              <i
                onClick={() => this.addExpense("income")}
                className="fas fa-plus-circle"
              />
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
              <i
                onClick={() => this.addExpense("outcome")}
                className="fas fa-plus-circle"
              />
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
