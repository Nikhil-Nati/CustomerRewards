import React, { useEffect, useState } from "react";
import { fetchTransactions } from "./api/FetchTransactions";
import CustomerList from "./components/CustomerList/CustomerList";
import MonthlyRewards from "./components/MonthlyRewards/MonthlyRewards";

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTransactions()
      .then((data) => {
        setTransactions(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading transactions...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Customer Rewards Dashboard</h1>
      <CustomerList
        transactions={transactions}
        onCustomerSelect={setSelectedCustomer}
      />
      {selectedCustomer && (
        <>
          <MonthlyRewards
            transactions={transactions}
            customerId={selectedCustomer}
          />
        </>
      )}
    </div>
  );
};

export default App;
