import styled from 'styled-components';

export const ButtonContainer = styled.button`
  font-size: 1.4em;
  background-color: ${({ theme }) => theme.bg.colors.normal};
  border: none;
  border-right: 1px solid #888;
  border-bottom: 1px solid #888;
  outline: none;

  &:active {
    background-color: ${({ theme }) => theme.bg.colors.normalActive};
  }

  &.double {
    grid-column: span 2;
  }

  &.triple {
    grid-column: span 3;
  }

  &.operation {
    background-color: ${({ theme }) => theme.bg.colors.operation};
    color: white;
  }

  &.operation:active {
    background-color: ${({ theme }) => theme.bg.colors.operationActive};
  }
`;
