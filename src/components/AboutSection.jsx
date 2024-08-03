import React from 'react';
import styled from 'styled-components';

const AboutSectionWrapper = styled.section`
  padding: 4rem 2rem;
  background-color: rgba(13, 12, 34, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(77, 255, 243, 0.2);
  margin: 2rem;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 0 30px rgba(77, 255, 243, 0.3);
    transform: translateY(-5px);
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  font-family: ${props => props.theme.fonts.heading};
  color: #4DFFF3;
  text-shadow: 0 0 10px rgba(77, 255, 243, 0.5);
`;

const AboutContent = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #8EBBFF;
  max-width: 800px;
  margin: 0 auto;
  text-shadow: 0 0 5px rgba(142, 187, 255, 0.3);
`;

const AboutSection = () => (
  <AboutSectionWrapper id="about">
    <SectionTitle>About Me</SectionTitle>
    <AboutContent>
      I'm a passionate software engineer with a keen interest in building scalable and efficient web applications. 
      With a strong foundation in computer science and a love for problem-solving, I strive to create 
      innovative solutions that make a positive impact. My journey through the digital universe has equipped me
      with the skills to navigate complex coding constellations and engineer stellar software experiences.
    </AboutContent>
  </AboutSectionWrapper>
);

export default AboutSection;