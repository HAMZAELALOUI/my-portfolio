import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavContainer from './NavContainer';
import NavTerminal from './NavTerminal';
import NamePrompt from './NamePrompt';
import NavPrompt from './NavPrompt';
import NavLink from './NavLink';
import SocialLinks from './SocialLinks';
import SocialLink from './SocialLink';
import Cursor from './Cursor';
import { FaGithub, FaLinkedin, FaUpload } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

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
          <SocialLink href="mailto:hamza.elaloui10@gmail.com" target="_blank" rel="noopener noreferrer">
            <SiGmail />
          </SocialLink>
          <SocialLink href="/path/to/your/cv.pdf" target="_blank" rel="noopener noreferrer">
            <FaUpload />
          </SocialLink>
        </SocialLinks>
      </NavTerminal>
    </NavContainer>
  );
};

export default Navigation;
