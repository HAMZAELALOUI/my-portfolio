import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const cursorBlink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 5px rgba(77, 255, 243, 0.2), 0 0 20px rgba(77, 255, 243, 0.1); }
  50% { box-shadow: 0 0 10px rgba(77, 255, 243, 0.3), 0 0 30px rgba(77, 255, 243, 0.2); }
`;

const NavContainer = styled.header`
  position: fixed;
  top: 30px;
  left: 30px;
  z-index: 1000;
  font-family: 'Fira Code', monospace;
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
`;

const NamePrompt = styled.div`
  color: #90EE90;
  margin-bottom: 15px;
  font-weight: bold;
  text-shadow: 0 0 5px rgba(144, 238, 144, 0.5);
`;

const NavPrompt = styled.div`
  color: #FF61D8;
  margin-bottom: 10px;
  text-shadow: 0 0 5px rgba(255, 97, 216, 0.5);
`;

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

const Cursor = styled.span`
  display: inline-block;
  width: 8px;
  height: 15px;
  background-color: #4DFFF3;
  margin-left: 5px;
  animation: ${cursorBlink} 0.8s infinite;
  box-shadow: 0 0 5px rgba(77, 255, 243, 0.5);
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid rgba(77, 255, 243, 0.3);
`;

const SocialLink = styled.a`
  color: #8EBBFF;
  font-size: 1.2rem;
  margin-right: 15px;
  transition: all 0.3s ease;
  text-shadow: 0 0 5px rgba(142, 187, 255, 0.5);

  &:hover {
    color: #4DFFF3;
    text-shadow: 0 0 8px rgba(77, 255, 243, 0.7);
    transform: translateY(-2px);
  }
`;

const Navigation = () => {
  const [activeLink, setActiveLink] = useState('/');
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <NavContainer>
      <NavTerminal>
        <NamePrompt>user@hamza-elaloui:~$</NamePrompt>
        <NavPrompt>hamza-elaloui:~/navigation$</NavPrompt>
        <NavLink to="/" className={activeLink === '/' ? 'active' : ''}>
          cd home
        </NavLink>
        <NavLink to="/about" className={activeLink === '/about' ? 'active' : ''}>
          cat about.md
        </NavLink>
        <NavLink to="/projects" className={activeLink === '/projects' ? 'active' : ''}>
          ls projects/
        </NavLink>
        <NavLink to="/contact" className={activeLink === '/contact' ? 'active' : ''}>
          ping contact
        </NavLink>
        <Cursor />
        <SocialLinks>
          <SocialLink href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </SocialLink>
          <SocialLink href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </SocialLink>
        </SocialLinks>
      </NavTerminal>
    </NavContainer>
  );
};

export default Navigation;