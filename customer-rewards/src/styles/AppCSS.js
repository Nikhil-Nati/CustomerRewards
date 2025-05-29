
import styled from "styled-components";

export const MainContainer = styled.div`
  padding: 2rem;
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: auto;
`;

export const Title = styled.h2`
  text-align: center;
  color: #2e2e2e;
`;

export const FlexContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-start;
  flex-wrap: wrap;

  & > * {
    flex: 1;
    min-width: 300px;
  }
`;
