import styled from 'styled-components';

export const FilterPanelWrapper = styled.div`
  font-family: Arial, sans-serif;
  margin: 1rem;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 600;
  font-size: 14px;
  color: #333;
`;

export const Select = styled.select`
  width: 150px;
  padding: 6px 8px;
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

export const Button = styled.button`
  margin-left: 1rem;
  background-color: #5ab5ff;
  border: none;
  color: rgb(32, 32, 32);
  margin-top: 0.6rem;
  padding: 0.5rem 1rem;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.2s ease-in-out;

  &:hover:enabled {
    background-color: #51a3e6;
  }

  &:disabled {
    background-color: #cccccc;
    color: #666666;
    cursor: not-allowed;
  }
`;
