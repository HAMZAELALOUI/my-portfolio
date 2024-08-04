import React from 'react';
import styled from 'styled-components';

const TerminalWindowWrapper = styled.div`
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

const ContactTerminalWindow = React.forwardRef(({ children }, ref) => {
  return (
    <TerminalWindowWrapper ref={ref}>
      {children}
    </TerminalWindowWrapper>
  );
});

export default ContactTerminalWindow;
