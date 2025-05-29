import "../../styles/CustomerList.css"

const CustomerList = ({ transactions, onCustomerSelect }) => {
  const customerSet = new Set(transactions.map((t) => t.customerId));
  const customerIds = [...customerSet];

  const handleChange = (event) => {
    const selectedCustomerId = event.target.value;
    onCustomerSelect(selectedCustomerId);
  };

  return (
    <div className="customer-list" >
      <h2>Select a Customer</h2>
      <select onChange={handleChange} defaultValue="">
        <option value="" disabled>
          -- Choose a Customer --
        </option>
        {customerIds.map((customerId) => (
          <option key={customerId} value={customerId}>
            Customer {customerId}
          </option>
        ))}
      </select>
    </div>
  );
};


export default CustomerList;
