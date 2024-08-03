import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { useInView } from 'react-intersection-observer';

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

const TerminalWindow = styled.div`
  width: 72%;
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

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const Command = styled.span`
  color: #B392F0;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  animation: ${typing} 1s steps(30, end);
`;

const Output = styled.div`
  color: #F0F6FC;
  white-space: pre-wrap;
  margin-top: 5px;
  padding-left: 20px;
`;

const SuccessMessage = styled.div`
  color: #A8FF60;
  margin-top: 5px;
  padding-left: 20px;
`;

const ErrorMessage = styled.div`
  color: #FF6B6B;
  margin-top: 5px;
  padding-left: 20px;
`;

const Input = styled.input`
  background-color: transparent;
  border: none;
  color: #B392F0;
  font-family: inherit;
  font-size: inherit;
  outline: none;
  width: 100%;
`;

function ContactSection() {
  const [terminalOutput, setTerminalOutput] = useState([]);
  const [currentInput, setCurrentInput] = useState('');
  const [currentField, setCurrentField] = useState('name');
  const [contactInfo, setContactInfo] = useState({ name: '', email: '', message: '' });
  const terminalRef = useRef(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
      addLine('hamza@contact:~$', './contact_form.sh', 'Welcome to the contact form. Please enter your information:');
      addLine('hamza@contact:~$', 'Enter your name:', null);
    }
  }, [inView]);

  useEffect(() => {
    scrollToBottom();
  }, [terminalOutput]);

  const handleInputChange = (e) => {
    setCurrentInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (currentField === 'name') {
      if (currentInput.trim() === '') {
        addLine('hamza@contact:~$', currentInput, <ErrorMessage>Error: Name cannot be empty. Please enter your name:</ErrorMessage>);
      } else {
        setContactInfo(prev => ({ ...prev, name: currentInput }));
        addLine('hamza@contact:~$', currentInput, null);
        addLine('hamza@contact:~$', 'Enter your email:', null);
        setCurrentField('email');
      }
    } else if (currentField === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(currentInput)) {
        addLine('hamza@contact:~$', currentInput, <ErrorMessage>Error: Invalid email format. Please enter a valid email:</ErrorMessage>);
      } else {
        setContactInfo(prev => ({ ...prev, email: currentInput }));
        addLine('hamza@contact:~$', currentInput, null);
        addLine('hamza@contact:~$', 'Enter your message:', null);
        setCurrentField('message');
      }
    } else if (currentField === 'message') {
      if (currentInput.trim() === '') {
        addLine('hamza@contact:~$', currentInput, <ErrorMessage>Error: Message cannot be empty. Please enter your message:</ErrorMessage>);
      } else {
        setContactInfo(prev => ({ ...prev, message: currentInput }));
        addLine('hamza@contact:~$', currentInput, null);
        addLine('hamza@contact:~$', 'send_message', <SuccessMessage>Message sent successfully! Thank you for contacting us.</SuccessMessage>);
        setCurrentField('done');
      }
    }
    
    setCurrentInput('');
  };

  return (
    <ContactSectionWrapper ref={ref}>
      <TerminalWindow>
        <TerminalHeader>
          <TerminalButtons>
            <TerminalButton color="#FF5F56" />
            <TerminalButton color="#FFBD2E" />
            <TerminalButton color="#27C93F" />
          </TerminalButtons>
          <TerminalTitle>Contact - Git Bash</TerminalTitle>
        </TerminalHeader>
        <TerminalContent ref={terminalRef}>
          {terminalOutput.map((line, index) => (
            <TerminalLine key={index}>
              <CommandLine>
                <Prompt>{line.prompt}</Prompt>
                <Command>{line.command}</Command>
              </CommandLine>
              {line.output && <Output>{line.output}</Output>}
            </TerminalLine>
          ))}
          {currentField !== 'done' && (
            <TerminalLine>
              <CommandLine>
                <Prompt>hamza@contact:~$</Prompt>
                <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                  <Input
                    type="text"
                    value={currentInput}
                    onChange={handleInputChange}
                    autoFocus
                  />
                </form>
              </CommandLine>
            </TerminalLine>
          )}
        </TerminalContent>
      </TerminalWindow>
    </ContactSectionWrapper>
  );
}

export default ContactSection;