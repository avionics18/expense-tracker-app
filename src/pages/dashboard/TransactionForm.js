import { useState } from "react";

const TransactionForm = ({ onSubmitHandler }) => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("expense");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    onSubmitHandler(e, desc, amount, type);

    // Set form to intial state
    setDesc("");
    setAmount(0);
    setType("expense");
  };

  return (
    <div className="transaction-form card border-dark shadow mb-4">
      <div className="card-header border-dark bg-dark-subtle">
        <span className="fs-5 fw-semibold">Add Transaction</span>
      </div>
      <div className="card-body">
        <form onSubmit={formSubmitHandler}>
          <div className="row">
            <div className="col-lg-6">
              <label htmlFor="desc" className="form-label">
                Description
              </label>
              <input
                type="text"
                id="desc"
                className="form-control"
                required
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
            <div className="col-lg-6">
              <label htmlFor="amount" className="form-label">
                Amount
              </label>
              <div className="input-group input-group">
                <span className="input-group-text">$</span>
                <input
                  type="number"
                  className="form-control"
                  id="amount"
                  required
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
            </div>
            <div className="col-lg-12 my-4">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="income"
                  value="income"
                  checked={type === "income"}
                  onChange={(e) => setType(e.target.value)}
                />
                <label className="form-check-label" htmlFor="income">
                  Income
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="expense"
                  value="expense"
                  checked={type === "expense"}
                  onChange={(e) => setType(e.target.value)}
                />
                <label className="form-check-label" htmlFor="expense">
                  Expense
                </label>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="d-grid">
                <button type="submit" className="btn btn-dark px-5">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TransactionForm;
