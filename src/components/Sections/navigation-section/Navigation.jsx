import React, { useState, useEffect } from 'react';
import NavContainer from './NavContainer';
import NavTerminal from './NavTerminal';
import NamePrompt from './NamePrompt';
import NavPrompt from './NavPrompt';
import NavLink from './NavLink';
import SocialLinks from './SocialLinks';
import SocialLink from './SocialLink';
import Cursor from './Cursor';
import { FaGithub, FaLinkedin, FaUpload, FaBars, FaTimes } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';

const Navigation = () => {
  const isHomeActive = useIntersectionObserver('home', { threshold: 0.5 });
  const isAboutActive = useIntersectionObserver('about', { threshold: 0.5 });
  const isProjectsActive = useIntersectionObserver('projects', { threshold: 0.5 });
  const isContactActive = useIntersectionObserver('contact', { threshold: 0.5 });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
  };

  const MobileMenuToggle = ({ isOpen, onClick }) => (
    <button onClick={onClick} className="mobile-menu-toggle">
      {isOpen ? <FaTimes /> : <FaBars />}
    </button>
  );

  return (
    <NavContainer isMobile={isMobile}>
      {isMobile && (
        <MobileMenuToggle
          isOpen={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
      )}
      <NavTerminal isMobile={isMobile} isOpen={!isMobile || isMobileMenuOpen}>
        <NamePrompt>user@hamza-elaloui:~$</NamePrompt>
        <NavPrompt>hamza-elaloui:~/navigation$</NavPrompt>
        <NavLink onClick={() => scrollToSection('home')} className={isHomeActive ? 'active' : ''}>
          cd home
          <Cursor visible={isHomeActive} />
        </NavLink>
        <NavLink onClick={() => scrollToSection('about')} className={isAboutActive ? 'active' : ''}>
          cat about.md
          <Cursor visible={isAboutActive} />
        </NavLink>
        <NavLink onClick={() => scrollToSection('projects')} className={isProjectsActive ? 'active' : ''}>
          ls projects/
          <Cursor visible={isProjectsActive} />
        </NavLink>
        <NavLink onClick={() => scrollToSection('contact')} className={isContactActive ? 'active' : ''}>
          ping contact
          <Cursor visible={isContactActive} />
        </NavLink>
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