import { useState, useCallback } from 'react';

export const useProjectTerminal = () => {
  const [terminalOutput, setTerminalOutput] = useState([]);

  const addLine = useCallback((prompt, command, output) => {
    setTerminalOutput(prev => [...prev, { prompt, command, output }]);
  }, []);

  const scrollToBottom = useCallback((ref) => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, []);

  return {
    terminalOutput,
    setTerminalOutput,
    addLine,
    scrollToBottom
  };
};