import styled from 'styled-components';

export const CalculatorContainer = styled.div`
  width: 23.5rem;
  height: 32rem;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 1.6rem;

  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: 1fr, repeat(5, 48px);
`;
