import React from 'react';
import { FaFolder, FaFolderOpen } from 'react-icons/fa';
import { ProjectList, ProjectItem, ProjectIcon, ProjectName } from '../../styles/ProjectList.styles';

const ProjectListComponent = ({ projects, selectedProject, onProjectClick }) => (
  <ProjectList>
    {projects.map((project, index) => (
      <ProjectItem 
        key={project.id}
        active={selectedProject && project.id === selectedProject.id}
        onClick={() => onProjectClick(project)}
        index={index}
      >
        <ProjectIcon>
          {selectedProject && project.id === selectedProject.id ? <FaFolderOpen /> : <FaFolder />}
        </ProjectIcon>
        <ProjectName>{project.name}</ProjectName>
      </ProjectItem>
    ))}
  </ProjectList>
);

export default ProjectListComponent;