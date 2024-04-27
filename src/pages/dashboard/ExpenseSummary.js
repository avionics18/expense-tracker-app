import { useState, useEffect } from "react";

const ExpenseSummary = ({ transactions }) => {
  const [totalIncome, setTotalIncome] = useState(0.0);
  const [totalExpenses, setTotalExpenses] = useState(0.0);
  const [balance, setBalance] = useState(0.0);

  useEffect(() => {
    let income = 0;
    let expenses = 0;

    transactions.forEach((t) => {
      if (t.transactionType === "income") {
        income += Number(t.transactionAmount);
      } else {
        expenses += Number(t.transactionAmount);
      }
    });

    setTotalIncome(income);
    setTotalExpenses(expenses);
    setBalance(income - expenses);
  }, [transactions]);

  const printBalance = () => {
    if (balance >= 0) {
      return "$" + balance;
    } else {
      return "-$" + balance * -1;
    }
  };

  return (
    <div className="expense-details card shadow border-dark mb-4">
      <div className="card-header bg-dark-subtle border-dark py-3">
        <h1 className="fs-5 fw-bold m-0">Expenses Summary</h1>
      </div>
      <div className="card-body py-5">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <div className="card shadow-sm bg-dark">
              <div className="card-header border-dark-subtle text-light fw-bold">
                Your Balance
              </div>
              <div className="card-body">
                <p className="card-text h2 text-white">{printBalance()}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card shadow-sm border-success-subtle">
              <div className="card-header bg-success-subtle text-success fw-bold">
                Your Income
              </div>
              <div className="card-body">
                <p className="card-text h4">{totalIncome}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card shadow-sm border-danger-subtle">
              <div className="card-header bg-danger-subtle text-danger fw-bold">
                Your Expenses
              </div>
              <div className="card-body">
                <p className="card-text h4">${totalExpenses}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseSummary;
