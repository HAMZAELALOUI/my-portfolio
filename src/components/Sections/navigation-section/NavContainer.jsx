import styled from 'styled-components';

const NavContainer = styled.header`
  position: fixed;
  top: 30px;
  left: 30px;
  z-index: 1000;
  font-family: 'Fira Code', monospace;

  ${props => props.isMobile && `
    top: 0;
    left: 0;
    right: 0;
    padding: 10px;
    background-color: rgba(13, 12, 34, 0.9);
  `}

  .mobile-menu-toggle {
    background: none;
    border: none;
    color: #4DFFF3;
    font-size: 24px;
    cursor: pointer;
    padding: 10px;
    display: ${props => props.isMobile ? 'block' : 'none'};
  }
`;

export default NavContainer;
