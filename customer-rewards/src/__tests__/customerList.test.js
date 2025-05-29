import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CustomerList from '../components/CustomerList/CustomerList';

describe('CustomerList', () => {
  const mockTransactions = [
    { customerId: '1', amount: 100 },
    { customerId: '2', amount: 200 },
    { customerId: '1', amount: 150 },
    { customerId: '3', amount: 300 },
  ];

  const setup = (onCustomerSelect = jest.fn()) => {
    render(<CustomerList transactions={mockTransactions} onCustomerSelect={onCustomerSelect} />);
    return onCustomerSelect;
  };

  it('renders the dropdown with customer options', () => {
    setup();

  expect(screen.getByText(/select a customer/i)).toBeInTheDocument();

    const options = screen.getAllByRole('option');
    expect(options.length).toBe(4); 
    expect(options[1]).toHaveTextContent('Customer 1');
    expect(options[2]).toHaveTextContent('Customer 2');
    expect(options[3]).toHaveTextContent('Customer 3');
  });

  it('calls onCustomerSelect with the selected customerId', () => {
    const onCustomerSelect = setup();

    const dropdown = screen.getByRole('combobox');
    fireEvent.change(dropdown, { target: { value: '2' } });

    expect(onCustomerSelect).toHaveBeenCalledWith('2');
    expect(onCustomerSelect).toHaveBeenCalledTimes(1);
  });

  it('renders without crashing with empty transactions', () => {
    render(<CustomerList transactions={[]} onCustomerSelect={jest.fn()} />);
    const options = screen.getAllByRole('option');
    expect(options.length).toBe(1); 
  });
});
