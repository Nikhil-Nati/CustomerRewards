import React from "react";
import {
  Container,
  CustomerListWrapper,
  Heading,
  Select,
} from "../../styles/CustomerList"

const CustomerList = ({ transactions, onCustomerSelect }) => {
  const customerSet = new Set(transactions.map((t) => t.customerId));
  const customerIds = [...customerSet];

  const handleChange = (event) => {
    const selectedCustomerId = event.target.value;
    onCustomerSelect(selectedCustomerId);
  };

  return (
    <Container>
      <CustomerListWrapper>
        <Heading>Select a Customer</Heading>
        <Select onChange={handleChange} defaultValue="">
          <option value="" disabled>
            -- Choose a Customer --
          </option>
          {customerIds.map((customerId) => (
            <option key={customerId} value={customerId}>
              Customer {customerId}
            </option>
          ))}
        </Select>
      </CustomerListWrapper>
    </Container>
  );
};

export default CustomerList;
