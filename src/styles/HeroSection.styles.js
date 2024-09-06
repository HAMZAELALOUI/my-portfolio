// StyledComponents.js
import styled, { keyframes } from 'styled-components';

export const HeroSectionWrapper = styled.section`
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: ${props => props.theme.colors.darkBackground};
  color: ${props => props.theme.colors.lightText};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeroCanvas = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const MouseIconContainer = styled.div`
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

export const ViewWorkButtonStyled = styled.button`
  background-color: transparent;
  color: #87CEFA; // Light sky blue, matching IntroductionText
  font-family: 'Consolas', 'Courier New', monospace;
  font-size: clamp(0.8rem, 2vw, 1rem);
  padding: clamp(8px, 2vw, 15px);
  border: 1px solid #87CEFA;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  text-shadow: 0 0 5px rgba(135, 206, 250, 0.5);
  box-shadow: 0 0 10px rgba(135, 206, 250, 0.3);

  &:hover {
    background-color: rgba(135, 206, 250, 0.1);
    box-shadow: 0 0 15px rgba(135, 206, 250, 0.5);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 8px 12px;
  }
`;

export const CommandPrompt = styled.span`
  color: #90EE90; // Light green, matching the IntroductionText prompt
  margin-right: 8px;
`;

export const ButtonText = styled.span`
  position: relative;

  &::after {
    content: '|';
    position: absolute;
    right: -10px;
    animation: ${blink} 1s step-end infinite;
    color: #87CEFA; // Light sky blue for the cursor
  }
`;

export const LoadingIndicator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: ${props => props.theme.colors.primary};
  font-family: 'Fira Code', monospace;
  font-size: 1.5rem;
`;
export const IntroductionTextStyled = styled.div`
  font-family: 'Consolas', 'Courier New', monospace;
  font-size: clamp(0.6rem, 1.5vw, 1rem);
  width: 100%;
  max-width: 800px;
  position: relative;
  padding: 15px;
  background-color: transparent;
  color: #F0F6FC; // Light blue-white color typical for Git Bash
  text-shadow: 0 0 5px rgba(240, 246, 252, 0.5); // Subtle glow
  overflow: visible;
  z-index: 10;

  @media (max-width: 1024px) {
    font-size: clamp(0.5rem, 2.5vw, 0.9rem);
  }

  .line {
    margin-bottom: 10px;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
  }

  .prompt {
    color: #85E89D; // Light green for the prompt
    margin-right: 8px;
    flex-shrink: 0;
  }

  .command {
    color: #B392F0; // Light purple for commands
    flex-grow: 1;
  }

  .typing-text {
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    animation: 
      typing 3.5s steps(40, end),
      blink-caret 0.75s step-end infinite;
  }

  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }

  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: #F0F6FC }
  }
`;