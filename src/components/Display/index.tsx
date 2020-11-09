import React from 'react';
import { DisplayContainer } from './styled';

interface DisplayProps {
  value: string;
}

const Display = ({ value }: DisplayProps) => (
  <DisplayContainer>{value}</DisplayContainer>
);

export default Display;
