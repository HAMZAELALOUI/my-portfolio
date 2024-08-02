import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.colors.darkBackground};
  color: ${props => props.theme.colors.lightText};
  padding: 2rem;
  text-align: center;
`;

const SocialLinks = styled.div`
  margin-top: 1rem;

  a {
    color: ${props => props.theme.colors.lightText};
    font-size: 1.5rem;
    margin: 0 0.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      <SocialLinks>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">Twitter</a>
      </SocialLinks>
    </FooterWrapper>
  );
};

export default Footer;