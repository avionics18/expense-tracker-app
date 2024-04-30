const TransactionList = ({ transactions }) => {
  return (
    <div className="transaction-list card border-dark shadow mb-4">
      <div className="card-header border-dark bg-dark-subtle">
        <span className="fs-5 fw-semibold">Transactions List</span>
      </div>
      <div className="card-body">
        <ul className="list-group list-group-flush small">
          {transactions.map((t) => (
            <li key={t.id} className="list-group-item d-flex">
              <span className="me-2">{t.description}</span>
              <span
                className={
                  "text-capitalize ms-auto me-2 " +
                  (t.transactionType === "income"
                    ? "text-success"
                    : "text-danger")
                }
              >
                {t.transactionType}
              </span>
              <span className="fw-bold">{"₹" + t.transactionAmount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TransactionList;
