import React from 'react';
import { ViewWorkButtonStyled, CommandPrompt, ButtonText } from './StyledComponents';

const ViewWorkButton = ({ onClick, disabled, isLoading }) => (
  <ViewWorkButtonStyled onClick={onClick} disabled={disabled} aria-label="View my work">
    <CommandPrompt>$</CommandPrompt>
    <ButtonText>{isLoading ? 'Loading...' : './view_portfolio.sh'}</ButtonText>
  </ViewWorkButtonStyled>
);

export default ViewWorkButton;