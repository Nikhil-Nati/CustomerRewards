import React, { useState } from "react";
import { calculatePoints } from "../../utils/calculateRewards";
import "../../styles/TableCSS.css"

const TransactionTable = ({ transactions, customerId }) => {
  const filtered = transactions.filter((txn) => txn.customerId === customerId);
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  const paginated = filtered.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  if (filtered.length === 0) {
    return <div>No transactions found.</div>;
  }

  return (
    <div>
      <h3>Transactions</h3>
      <table >
        <thead className="txn-table">
          <tr>
            <th>Transaction</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {paginated.map((txn) => (
            <tr key={txn.transactionId}>
              <td>{txn.transactionId}</td>
              <td>{txn.date}</td>
              <td>${txn.amount.toFixed(2)}</td>
              <td>{calculatePoints(txn.amount)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        Page:
        {[...Array(totalPages).keys()].map((i) => (
          <button className="page-button" key={i} onClick={() => setPage(i + 1)}>{i + 1}</button>
        ))}
      </div>
    </div>
  );
};

export default TransactionTable;
