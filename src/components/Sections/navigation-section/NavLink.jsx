import styled from 'styled-components';

const NavLink = styled.button`
  display: flex;
  align-items: center;
  color: #8EBBFF;
  text-decoration: none;
  padding: 5px 0;
  transition: all 0.3s ease;
  position: relative;
  text-shadow: 0 0 5px rgba(142, 187, 255, 0.5);
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  text-align: left;
  
  // Remove outline for all states
  outline: none;
  &::-moz-focus-inner {
    border: 0;
  }

  &:focus {
    outline: none;
  }

  &:hover, &.active {
    color: #4DFFF3;
    text-shadow: 0 0 8px rgba(77, 255, 243, 0.7);
  }

  &::before {
    content: '$ ';
    color: #90EE90;
  }

  &:hover::after, &.active::after {
    width: 100%;
  }

  ${props => props.isMobile && `
    padding: 10px 0;
    font-size: 1.1em;
  `}
`;

export default NavLink;