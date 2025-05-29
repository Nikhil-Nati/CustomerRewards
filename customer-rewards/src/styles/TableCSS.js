import styled from 'styled-components';

export const Heading = styled.h3`
  color: #2e2e2e;
`;

export const Pagination = styled.div`
  float: right;
  padding: 1rem;
`;

export const Button = styled.button`
  background-color: #5ab5ff;
  border: none;
  color: rgb(32, 32, 32);
  padding: 0.5rem;
  margin-left: 0.5rem;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #51a3e6;
  }

  &:disabled {
    background-color: #cccccc;
    color: #666666;
    cursor: not-allowed;
  }
`;

export const StyledTable = styled.table`
  width: 90%;
  border-collapse: collapse;
  margin-top: 2rem;
  font-family: Arial, sans-serif;
  font-size: 14px;
  margin: auto;

  thead {
    background-color: #5ab5ff;
  }

  th, td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: center;
  }

  td {
    background-color: white;
  }

  tbody tr:hover {
    background-color: #f9f9f9;
  }
`;
