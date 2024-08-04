import React from 'react';
import styled from 'styled-components';

const TerminalWindowWrapper = styled.div`
  width: 70%;
  max-width: 1600px;
  height: 80vh;
  background-color: rgba(13, 12, 34, 0.25);
  border-radius: 10px;
  padding: 20px;
  font-family: 'Fira Code', 'Consolas', 'Courier New', monospace;
  font-size: 1rem;
  overflow-y: auto;
  box-shadow: 0 0 30px rgba(135, 206, 250, 0.5);
  border: 1px solid rgba(135, 206, 250, 0.3);
  margin-right: 20px;
`;

const TerminalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: rgba(135, 206, 250, 0.1);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin: -20px -20px 20px -20px;
`;

const TerminalTitle = styled.span`
  font-weight: bold;
  color: #F0F6FC;
`;

const TerminalButtons = styled.div`
  display: flex;
  gap: 5px;
`;

const TerminalButton = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.color};
`;

export const TerminalContent = styled.div`
  height: calc(100% - 50px);
  overflow-y: auto;
`;

export const TerminalWindow = ({ title, children }) => (
  <TerminalWindowWrapper>
    <TerminalHeader>
      <TerminalButtons>
        <TerminalButton color="#FF5F56" />
        <TerminalButton color="#FFBD2E" />
        <TerminalButton color="#27C93F" />
      </TerminalButtons>
      <TerminalTitle>{title}</TerminalTitle>
    </TerminalHeader>
    {children}
  </TerminalWindowWrapper>
);