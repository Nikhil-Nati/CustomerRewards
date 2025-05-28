import React from "react";

const CustomerList = ({ transactions, onCustomerSelect }) => {
  const customerSet = new Set(transactions.map((t) => t.customerId));

  return (
    <div>
      <h2>Select a Customer</h2>
      <ul>
        {[...customerSet].map((customerId) => (
          <li key={customerId}>
            <button className="customer-select-button" 
            onClick={() => onCustomerSelect(customerId)}>
              Customer {customerId}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerList;
