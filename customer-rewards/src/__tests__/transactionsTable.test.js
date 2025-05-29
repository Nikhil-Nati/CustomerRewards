import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CustomerList from '../components/CustomerList/CustomerList';

describe('CustomerList', () => {
  const mockTransactions = [
    { transactionId: "T1", amount: 120, date: "2025-03-10", customerId: "C1" },
    { transactionId: "T2", amount: 90, date: "2025-03-12", customerId: "C1" },
  ];

  const setup = (onCustomerSelect = jest.fn()) => {
    render(<CustomerList transactions={mockTransactions} onCustomerSelect={onCustomerSelect} />);
    return onCustomerSelect;
  };

  it('renders the dropdown with only one unique customer option', () => {
    setup();

    const options = screen.getAllByRole('option');
    expect(options.length).toBe(2); 
    expect(options[1]).toHaveTextContent('Customer C1');
  });

  it('calls onCustomerSelect with the correct customerId when selected', () => {
    const onCustomerSelect = setup();

    const dropdown = screen.getByRole('combobox');
    fireEvent.change(dropdown, { target: { value: 'C1' } });

    expect(onCustomerSelect).toHaveBeenCalledWith('C1');
    expect(onCustomerSelect).toHaveBeenCalledTimes(1);
  });

  it('renders properly even with only one customer', () => {
    render(<CustomerList transactions={mockTransactions} onCustomerSelect={() => {}} />);
    expect(screen.getByText(/select a customer/i)).toBeInTheDocument();
  });
});
