import { useState } from "react";
import { useAddTransaction } from "../../hooks/useAddTransaction";
import { useGetTransactions } from "../../hooks/useGetTransactions";
import AppHeader from "./AppHeader";
import ExpenseSummary from "./ExpenseSummary";
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";

export const Dashboard = () => {
  const { addTransaction } = useAddTransaction();
  const { transactions } = useGetTransactions();

  const onSubmitHandler = (
    e,
    description,
    transactionAmount,
    transactionType
  ) => {
    e.preventDefault();
    addTransaction({
      description,
      transactionAmount,
      transactionType,
    });
  };

  return (
    <div>
      <AppHeader />
      <div className="container">
        <ExpenseSummary transactions={transactions} />
        <div className="row">
          <div className="col-lg-8">
            <TransactionForm onSubmitHandler={onSubmitHandler} />
          </div>
          <div className="col-lg-4">
            <TransactionList transactions={transactions} />
          </div>
        </div>
      </div>
    </div>
  );
};
