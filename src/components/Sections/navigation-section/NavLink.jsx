import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavLink = styled(Link)`
  display: block;
  color: #8EBBFF;
  text-decoration: none;
  padding: 5px 0;
  transition: all 0.3s ease;
  position: relative;
  text-shadow: 0 0 5px rgba(142, 187, 255, 0.5);

  &:hover, &.active {
    color: #4DFFF3;
    text-shadow: 0 0 8px rgba(77, 255, 243, 0.7);
  }

  &::before {
    content: '$ ';
    color: #90EE90;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background-color: #4DFFF3;
    transition: width 0.3s ease;
    box-shadow: 0 0 5px rgba(77, 255, 243, 0.5);
  }

  &:hover::after, &.active::after {
    width: 100%;
  }
`;

export default NavLink;
