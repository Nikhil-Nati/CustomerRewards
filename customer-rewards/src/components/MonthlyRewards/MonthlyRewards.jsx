import React from "react";
import { calculatePoints } from "../../utils/calculateRewards";

const MonthlyRewards = ({ transactions, customerId }) => {
  const customerTxns = transactions.filter(
    (txn) => txn.customerId === customerId
  );

  const grouped = {};

  customerTxns.forEach(({ amount, date }) => {
    const month = new Date(date).toLocaleString("default", { month: "long" });
    grouped[month] = (grouped[month] || 0) + calculatePoints(amount);
  });

  const total = Object.values(grouped).reduce((acc, val) => acc + val, 0);

  return (
    <div>
      <h3>Monthly Rewards for {customerId}</h3>
      <ul>
        {Object.entries(grouped).map(([month, points]) => (
          <li key={month}>
            {month}: {points} points
          </li>
        ))}
      </ul>
      <strong>Total: {total} points</strong>
    </div>
  );
};

export default MonthlyRewards;
