import { useState, useRef, useCallback } from 'react';

export const useTerminal = () => {
  const [terminalOutput, setTerminalOutput] = useState([]);
  const terminalRef = useRef(null);

  const addLine = useCallback((prompt, command, output) => {
    setTerminalOutput(prev => [...prev, { prompt, command, output }]);
  }, []);

  const scrollToBottom = useCallback(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, []);

  return { terminalOutput, terminalRef, addLine, scrollToBottom };
};