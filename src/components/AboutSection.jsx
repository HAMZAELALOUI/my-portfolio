import React from 'react';
import styled from 'styled-components';

const AboutSectionWrapper = styled.section`
  padding: 4rem 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  font-family: ${props => props.theme.fonts.heading};
`;

const AboutSection = () => (
  <AboutSectionWrapper id="about">
    <SectionTitle>About Me</SectionTitle>
    <p>
      I'm a passionate software engineer with a keen interest in building scalable and efficient web applications. 
      With a strong foundation in computer science and a love for problem-solving, I strive to create 
      innovative solutions that make a positive impact.
    </p>
  </AboutSectionWrapper>
);

export default AboutSection;