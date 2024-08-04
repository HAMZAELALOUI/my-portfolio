import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import ContactTerminalWindow from './ContactTerminalWindow';
import ContactTerminalLine from './ContactTerminalLine';
import CustomInput from './CustomInput';
import styled from 'styled-components';

const ContactSectionWrapper = styled.section`
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: ${props => props.theme.colors.darkBackground};
  color: ${props => props.theme.colors.lightText};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
`;

function ContactSection() {
  const [terminalOutput, setTerminalOutput] = useState([]);
  const [currentInput, setCurrentInput] = useState('');
  const [currentField, setCurrentField] = useState('command');
  const terminalRef = useRef(null);
  const inputRef = useRef(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const addLine = (prompt, command, output) => {
    setTerminalOutput(prev => [...prev, { prompt, command, output }]);
  };

  const scrollToBottom = () => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    if (inView) {
      addLine('hamza@contact:~$', '', 'Welcome to the contact terminal. Available commands:');
      addLine('', '', 'contact - Start a new contact form\nclear - Clear the terminal\nexit - Exit the terminal');
    }
  }, [inView]);

  useEffect(() => {
    scrollToBottom();
  }, [terminalOutput]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [currentField]);

  const handleInputChange = (e) => {
    setCurrentInput(e.target.value);
  };

  const handleSubmit = () => {
    // Handle input submission logic based on currentField
    // Similar to your original logic but refactored into functions
  };

  return (
    <ContactSectionWrapper ref={ref}>
      <ContactTerminalWindow ref={terminalRef}>
        {terminalOutput.map((line, index) => (
          <ContactTerminalLine key={index} {...line} />
        ))}
        {currentField !== 'done' && (
          <CustomInput
            ref={inputRef}
            value={currentInput}
            onChange={handleInputChange}
            onSubmit={handleSubmit}
          />
        )}
      </ContactTerminalWindow>
    </ContactSectionWrapper>
  );
}

export default ContactSection;
