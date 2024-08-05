import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { projects } from '../../../data/projectsData';
import { useProjectTerminal } from '../../../hooks/useProjectTerminal';
import TerminalWindow from '../../common/TerminalWindow';
import ProjectList from '../../common/ProjectList';
import ProjectDetails from '../../common/ProjectDetails';
import ImageModal from '../../common/ImageModal';
import { ProjectSectionWrapper } from '../../../styles/ProjectSection.styles';
import { FaChevronLeft, FaChevronRight, FaTimes, FaFolder, FaFolderOpen } from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const FadeInDiv = styled.div`
  animation: ${fadeIn} 0.5s ease-in;
`;

function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAllThumbnails, setShowAllThumbnails] = useState(false);
  const terminalRef = useRef(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { terminalOutput, addLine, scrollToBottom, setTerminalOutput } = useProjectTerminal();

  useEffect(() => {
    if (inView) {
      addLine('hamza@projects:~$', 'ls projects', (
        <ProjectList
          projects={projects}
          selectedProject={selectedProject}
          onProjectClick={handleProjectClick}
        />
      ));
      scrollToBottom(terminalRef);
    }
  }, [inView]);

  useEffect(() => {
    if (selectedProject) {
      setTerminalOutput(prev => {
        const newOutput = prev.filter(line => line.command !== 'cat project_details.txt');
        newOutput.push({
          prompt: 'hamza@projects:~$',
          command: 'cat project_details.txt',
          output: (
            <FadeInDiv>
              <ProjectDetails
                project={selectedProject}
                currentImageIndex={currentImageIndex}
                showAllThumbnails={showAllThumbnails}
                onImageChange={handleImageChange}
                onThumbnailClick={handleThumbnailClick}
                onShowMoreClick={() => setShowAllThumbnails(true)}
                onImageClick={handleImageClick}
              />
            </FadeInDiv>
          )
        });
        return newOutput;
      });
    }
  }, [currentImageIndex, selectedProject, showAllThumbnails]);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setShowAllThumbnails(false);
    scrollToTop(terminalRef);
  };

  const scrollToTop = (ref) => {
    if (ref.current) {
      ref.current.scrollTop = 0;
    }
  };

  const handleImageChange = (direction) => {
    if (!selectedProject) return;
    
    setCurrentImageIndex((prevIndex) => {
      const newIndex = prevIndex + direction;
      if (newIndex >= 0 && newIndex < selectedProject.images.length) {
        return newIndex;
      }
      return prevIndex;
    });
  };

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleCommand = (command) => {
    addLine('hamza@projects:~$', command, 'Command not recognized.');
    scrollToBottom(terminalRef);
  };

  return (
    <ProjectSectionWrapper ref={ref}>
      <TerminalWindow title="Projects - Git Bash" onCommand={handleCommand} ref={terminalRef}>
        {terminalOutput.map((line, index) => (
          <TerminalWindow.Line key={index} {...line} />
        ))}
      </TerminalWindow>
      {isModalOpen && selectedProject && (
        <ImageModal
          project={selectedProject}
          currentImageIndex={currentImageIndex}
          onClose={toggleModal}
          onImageChange={handleImageChange}
        />
      )}
    </ProjectSectionWrapper>
  );
}

export default ProjectSection;