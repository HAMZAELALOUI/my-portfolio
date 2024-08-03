// ViewWorkButton.js
import React from 'react';
import { ViewWorkButtonStyled } from './StyledComponents';

const ViewWorkButton = ({ onClick, disabled, isLoading }) => (
  <ViewWorkButtonStyled onClick={onClick} disabled={disabled}>
    {isLoading ? 'Loading...' : 'View My Work'}
  </ViewWorkButtonStyled>
);

export default ViewWorkButton;