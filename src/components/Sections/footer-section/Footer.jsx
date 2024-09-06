import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaUpload, FaEnvelope, FaPhone } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.colors.darkBackground};
  color: ${props => props.theme.colors.lightText};
  padding: 2rem 0;
  font-family: 'Fira Code', 'Consolas', 'Courier New', monospace;
  width: 100%;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 0 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Section = styled.div`
  flex: 1;
  min-width: 250px;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: ${props => props.align || 'flex-start'};

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    margin-bottom: 2rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const SocialLink = styled.a`
  color: ${props => props.theme.colors.lightText};
  font-size: 1.5rem;
  transition: color 0.3s ease, transform 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    color: ${props => props.theme.colors.primary};
    transform: translateY(-3px);
  }
`;

const LinkText = styled.span`
  font-size: 0.8rem;
  margin-top: 0.2rem;
`;

const ContactItem = styled.p`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 0.5rem;

  svg {
    margin-right: 0.5rem;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(135, 206, 250, 0.3);
  margin: 1rem 0;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper>
      <FooterContent>
        <Section>
          <p>Created by Hamza El Aloui</p>
          <p>&copy; {currentYear} All rights reserved</p>
        </Section>
        <Section align="center">
          <SocialLinks>
            <SocialLink href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaGithub />
              <LinkText>GitHub</LinkText>
            </SocialLink>
            <SocialLink href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
              <LinkText>LinkedIn</LinkText>
            </SocialLink>
            <SocialLink href="/path/to/your/cv.pdf" target="_blank" rel="noopener noreferrer">
              <FaUpload />
              <LinkText>Upload CV</LinkText>
            </SocialLink>
            <SocialLink href="mailto:hamza.elaloui10@gmail.com" target="_blank" rel="noopener noreferrer">
              <SiGmail />
              <LinkText>Gmail</LinkText>
            </SocialLink>
          </SocialLinks>
        </Section>
        <Section align="flex-end">
          <ContactItem>
            <FaEnvelope /> hamza.elaloui10@gmail.com
          </ContactItem>
          <ContactItem>
            <FaPhone /> +212 622557026
          </ContactItem>
        </Section>
      </FooterContent>
      <Divider />
      <FooterContent>
        <p style={{ width: '100%', textAlign: 'center', padding: '0 10px' }}>
          <span style={{ color: '#85E89D' }}>hamza@portfolio:~$</span> Thank you for visiting!
        </p>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;