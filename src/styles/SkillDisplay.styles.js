import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 10px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  }
`;

export const SkillItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  animation: ${fadeIn} 0.5s ease-out forwards;
  animation-delay: ${props => props.index * 0.1}s;
  opacity: 0;

  @media (max-width: 768px) {
    font-size: 0.9em;
  }

  @media (max-width: 480px) {
    font-size: 0.8em;
  }
`;

export const SkillIcon = styled.span`
  margin-right: 10px;
  font-size: 1.2em;

  @media (max-width: 768px) {
    font-size: 1.1em;
  }

  @media (max-width: 480px) {
    font-size: 1em;
  }
`;