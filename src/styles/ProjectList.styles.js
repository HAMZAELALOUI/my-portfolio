import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const ProjectList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 15px;
  padding: 10px;
`;

export const ProjectItem = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  background-color: rgba(135, 206, 250, 0.1);
  border-radius: 5px;
  cursor: pointer;
  animation: ${fadeIn} 0.5s ease-out forwards;
  animation-delay: ${props => props.index * 0.1}s;
  opacity: 0;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(135, 206, 250, 0.2);
  }

  ${props => props.active && css`
    background-color: rgba(78, 201, 176, 0.2);
    box-shadow: 0 0 10px rgba(78, 201, 176, 0.3);
  `}
`;

export const ProjectIcon = styled.span`
  margin-right: 10px;
  color: #4EC9B0;
`;

export const ProjectName = styled.span`
  flex-grow: 1;
`;