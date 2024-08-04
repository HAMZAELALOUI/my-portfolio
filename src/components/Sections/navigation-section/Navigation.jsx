import React from 'react';
import { HashLink } from 'react-router-hash-link';
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
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';

const Navigation = () => {
  const isHomeActive = useIntersectionObserver('home', { threshold: 0.5 });
  const isAboutActive = useIntersectionObserver('about', { threshold: 0.5 });
  const isProjectsActive = useIntersectionObserver('projects', { threshold: 0.5 });
  const isContactActive = useIntersectionObserver('contact', { threshold: 0.5 });

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80; // Adjust this value based on your fixed header height
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  return (
    <NavContainer>
      <NavTerminal>
        <NamePrompt>user@hamza-elaloui:~$</NamePrompt>
        <NavPrompt>hamza-elaloui:~/navigation$</NavPrompt>
        <NavLink as={HashLink} smooth to="#home" scroll={scrollWithOffset} className={isHomeActive ? 'active' : ''}>
          cd home
          <Cursor visible={isHomeActive} />
        </NavLink>
        <NavLink as={HashLink} smooth to="#about" scroll={scrollWithOffset} className={isAboutActive ? 'active' : ''}>
          cat about.md
          <Cursor visible={isAboutActive} />
        </NavLink>
        <NavLink as={HashLink} smooth to="#projects" scroll={scrollWithOffset} className={isProjectsActive ? 'active' : ''}>
          ls projects/
          <Cursor visible={isProjectsActive} />
        </NavLink>
        <NavLink as={HashLink} smooth to="#contact" scroll={scrollWithOffset} className={isContactActive ? 'active' : ''}>
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