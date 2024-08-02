import React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
`;

const SkillItem = styled.div`
  background-color: ${props => props.theme.colors.darkBackground};
  color: ${props => props.theme.colors.lightText};
  padding: 1rem;
  border-radius: 4px;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const skills = [
  'JavaScript', 'React', 'Node.js', 'Python',
  'SQL', 'Git', 'RESTful APIs', 'HTML/CSS',
  'TypeScript', 'Docker', 'AWS', 'Agile/Scrum'
];

const SkillsGrid = () => {
  return (
    <Grid>
      {skills.map((skill, index) => (
        <SkillItem key={index}>{skill}</SkillItem>
      ))}
    </Grid>
  );
};

export default SkillsGrid;