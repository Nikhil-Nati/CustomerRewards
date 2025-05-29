import styled from 'styled-components';

export const Container = styled.div`
  margin: 1rem;
`;

export const CustomerListWrapper = styled.div`
  margin: 1.5rem 0;
  font-family: Arial, sans-serif;
`;

export const Heading = styled.h2`
  margin-bottom: 0.3rem;
  font-size: 1.2rem;
  color: #333;
`;

export const Select = styled.select`
  width: 250px;
  padding: 8px 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  color: #333;
  cursor: pointer;
  transition: border 0.2s ease-in-out;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;
