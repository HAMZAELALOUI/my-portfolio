import React, { useState, forwardRef } from 'react';
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

const TerminalContent = styled.div`
  height: calc(100% - 50px);
  overflow-y: auto;
`;

const TerminalLine = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
`;

const CommandLine = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Prompt = styled.span`
  color: #85E89D;
  white-space: nowrap;
  padding: 5px;
`;

const Command = styled.span`
  color: #B392F0;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
`;

const Output = styled.div`
  color: #F0F6FC;
  white-space: pre-wrap;
  margin-top: 5px;
  padding-left: 20px;
`;

const InputLine = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Input = styled.input`
  background: none;
  border: none;
  color: #F0F6FC;
  font-family: inherit;
  font-size: inherit;
  outline: none;
  flex-grow: 1;
`;

const TerminalWindow = forwardRef(({ title, children, onCommand }, ref) => {
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onCommand(inputValue);
      setInputValue('');
    }
  };

  return (
    <TerminalWindowWrapper>
      <TerminalHeader>
        <TerminalButtons>
          <TerminalButton color="#FF5F56" />
          <TerminalButton color="#FFBD2E" />
          <TerminalButton color="#27C93F" />
        </TerminalButtons>
        <TerminalTitle>{title}</TerminalTitle>
      </TerminalHeader>
      <TerminalContent ref={ref}>
        {children}
        <InputLine>
          <Prompt>hamza@projects:~$</Prompt>
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </InputLine>
      </TerminalContent>
    </TerminalWindowWrapper>
  );
});

TerminalWindow.Line = ({ prompt, command, output }) => (
  <TerminalLine>
    <CommandLine>
      <Prompt>{prompt}</Prompt>
      <Command>{command}</Command>
    </CommandLine>
    {output && <Output>{output}</Output>}
  </TerminalLine>
);

export default TerminalWindow;