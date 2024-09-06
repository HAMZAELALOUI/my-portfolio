import styled, { keyframes } from 'styled-components';

export const ProjectSectionWrapper = styled.section`
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

  @media (max-width: 1024px) {
    padding: 15px;
  }

  @media (max-width: 768px) {
    justify-content: center;
    padding: 10px;
  }
`;

export const TerminalLine = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    margin-bottom: 8px;
  }
`;

export const CommandLine = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const Prompt = styled.span`
  color: #85E89D;
  white-space: nowrap;
  padding: 5px;

  @media (max-width: 768px) {
    font-size: 0.9em;
    padding: 3px;
  }
`;

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

export const Command = styled.span`
  color: #B392F0;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  animation: ${typing} 1s steps(30, end);

  @media (max-width: 768px) {
    font-size: 0.9em;
    max-width: 100%;
  }
`;

export const Output = styled.div`
  color: #F0F6FC;
  white-space: pre-wrap;
  margin-top: 5px;
  padding-left: 20px;

  @media (max-width: 768px) {
    font-size: 0.9em;
    padding-left: 10px;
    margin-top: 3px;
  }
`;