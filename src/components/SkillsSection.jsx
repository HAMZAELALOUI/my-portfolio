import React from 'react';
import styled from 'styled-components';
import SkillsGrid from './SkillsGrid';

const SkillsSectionWrapper = styled.section`
  padding: 4rem 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  font-family: ${props => props.theme.fonts.heading};
`;

const SkillsSection = () => (
  <SkillsSectionWrapper id="skills">
    <SectionTitle>My Skills</SectionTitle>
    <SkillsGrid />
  </SkillsSectionWrapper>
);

export default SkillsSection;