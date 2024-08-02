import React from 'react';
import styled from 'styled-components';

const ContactSectionWrapper = styled.section`
  padding: 4rem 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  font-family: ${props => props.theme.fonts.heading};
`;

const ContactSection = () => (
  <ContactSectionWrapper id="contact">
    <SectionTitle>Get In Touch</SectionTitle>
    <p>
      I'm always open to new opportunities and collaborations. 
      Feel free to reach out to me at <a href="mailto:your.email@example.com">your.email@example.com</a> 
      or connect with me on <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
    </p>
  </ContactSectionWrapper>
);

export default ContactSection;