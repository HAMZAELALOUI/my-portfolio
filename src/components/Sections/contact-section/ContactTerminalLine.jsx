import React from 'react';
import styled from 'styled-components';

const LineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
`;

const Prompt = styled.span`
  color: #85E89D;
  white-space: nowrap;
  padding: 5px;
`;

const Command = styled.span`
  color: #B392F0;
  white-space: nowrap;
`;

const Output = styled.div`
  color: #F0F6FC;
  white-space: pre-wrap;
  margin-top: 5px;
  padding-left: 20px;
`;

const ContactTerminalLine = ({ prompt, command, output }) => (
  <LineWrapper>
    <Prompt>{prompt}</Prompt>
    <Command>{command}</Command>
    {output && <Output>{output}</Output>}
  </LineWrapper>
);

export default ContactTerminalLine;
