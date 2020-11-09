import React from 'react';
import { ButtonContainer } from './styled';

interface ButtonProps {
  label: string;
  click: (label: string) => void;
  operation?: boolean;
  double?: boolean;
  triple?: boolean;
}

const Button = ({ operation, double, triple, label, click }: ButtonProps) => (
  <ButtonContainer
    onClick={() => click && click(label)}
    className={`
        ${operation ? 'operation' : ''}
        ${double ? 'double' : ''}
        ${triple ? 'triple' : ''}
    `}
  >
    {label}
  </ButtonContainer>
);

export default Button;
