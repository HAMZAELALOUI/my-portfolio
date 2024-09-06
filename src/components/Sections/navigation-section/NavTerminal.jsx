import styled, { keyframes } from 'styled-components';

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 5px rgba(77, 255, 243, 0.2), 0 0 20px rgba(77, 255, 243, 0.1); }
  50% { box-shadow: 0 0 10px rgba(77, 255, 243, 0.3), 0 0 30px rgba(77, 255, 243, 0.2); }
`;

const NavTerminal = styled.div`
  background-color: rgba(13, 12, 34, 0.15);
  border: 1px solid rgba(77, 255, 243, 0.3);
  border-radius: 8px;
  padding: 20px;
  backdrop-filter: blur(5px);
  max-width: 350px;
  animation: ${glow} 4s infinite alternate;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(13, 12, 34, 0.25);
    box-shadow: 0 0 15px rgba(77, 255, 243, 0.3), 0 0 40px rgba(77, 255, 243, 0.2);
  }

  ${props => props.isMobile && `
    display: ${props.isOpen ? 'block' : 'none'};
    max-width: 100%;
    border-radius: 0;
    padding: 15px;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: rgba(13, 12, 34, 0.9);
  `}
`;

export default NavTerminal;
