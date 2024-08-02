import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const twinkle = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

const NavContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(10, 25, 47, 0.95);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      radial-gradient(white 1px, transparent 1px),
      radial-gradient(white 1px, transparent 1px);
    background-size: 50px 50px;
    background-position: 0 0, 25px 25px;
    opacity: 0.1;
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      radial-gradient(white 1px, transparent 1px),
      radial-gradient(white 1px, transparent 1px);
    background-size: 30px 30px;
    background-position: 0 0, 15px 15px;
    opacity: 0.05;
    z-index: -1;
    animation: ${twinkle} 4s infinite alternate;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  max-width: 1400px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: bold;
  color: #64ffda;
  text-decoration: none;
  font-family: 'Fira Code', monospace;
  transition: color 0.3s ease;

  &:hover {
    color: #ffffff;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: #ffffff;
  font-weight: 500;
  text-decoration: none;
  position: relative;
  padding: 0.5rem 0;
  transition: color 0.3s ease;
  font-family: 'Fira Code', monospace;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #64ffda;
    transition: width 0.3s ease;
  }

  &:hover, &.active {
    color: #64ffda;
  }

  &:hover::after, &.active::after {
    width: 100%;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #ffffff;
  transition: color 0.3s ease;
  font-family: 'Fira Code', monospace;

  &:hover {
    color: #64ffda;
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: rgba(10, 25, 47, 0.98);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 1rem 5%;
  }
`;

const MobileNavLink = styled(NavLink)`
  padding: 1rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  &:last-child {
    border-bottom: none;
  }
`;



const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <NavContainer>
      <Nav>
        <Logo to="/">{'<YourName />'}</Logo>
        <NavLinks>
          <NavLink to="/" className={location.pathname === '/' ? 'active' : ''}>Home</NavLink>
          <NavLink to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</NavLink>
          <NavLink to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>Projects</NavLink>
          <NavLink to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</NavLink>
        </NavLinks>
        <MenuButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </MenuButton>
      </Nav>
      <AnimatePresence>
        {isOpen && (
          <MobileMenu
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <MobileNavLink to="/">Home</MobileNavLink>
            <MobileNavLink to="/about">About</MobileNavLink>
            <MobileNavLink to="/projects">Projects</MobileNavLink>
            <MobileNavLink to="/contact">Contact</MobileNavLink>
          </MobileMenu>
        )}
      </AnimatePresence>
    </NavContainer>
  );
};

export default Navigation;