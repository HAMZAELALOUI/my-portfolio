import React from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';

const ProjectsSectionWrapper = styled.section`
  padding: 4rem 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  font-family: ${props => props.theme.fonts.heading};
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectsSection = () => (
  <ProjectsSectionWrapper id="projects">
    <SectionTitle>Featured Projects</SectionTitle>
    <ProjectsGrid>
      <ProjectCard 
        title="Project 1"
        description="A brief description of project 1."
        image="/path/to/project1-image.jpg"
        techStack={['React', 'Node.js', 'MongoDB']}
      />
      <ProjectCard 
        title="Project 2"
        description="A brief description of project 2."
        image="/path/to/project2-image.jpg"
        techStack={['Python', 'Django', 'PostgreSQL']}
      />
    </ProjectsGrid>
  </ProjectsSectionWrapper>
);

export default ProjectsSection;