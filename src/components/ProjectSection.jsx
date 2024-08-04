import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { FaChevronRight, FaChevronLeft, FaTimes, FaFolder, FaFolderOpen } from 'react-icons/fa';

const ProjectSectionWrapper = styled.section`
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: ${props => props.theme.colors.darkBackground};
  color: ${props => props.theme.colors.lightText};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
`;

const TerminalWindow = styled.div`
  width: 70%;
  max-width: 1600px;
  height: 80vh;
  background-color: rgba(13, 12, 34, 0.25);
  border-radius: 10px;
  padding: 20px;
  font-family: 'Fira Code', 'Consolas', 'Courier New', monospace;
  font-size: 1rem;
  overflow-y: auto;
  box-shadow: 0 0 30px rgba(135, 206, 250, 0.5);
  border: 1px solid rgba(135, 206, 250, 0.3);
  margin-right: 20px;
`;

const TerminalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: rgba(135, 206, 250, 0.1);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin: -20px -20px 20px -20px;
`;

const TerminalTitle = styled.span`
  font-weight: bold;
  color: #F0F6FC;
`;

const TerminalButtons = styled.div`
  display: flex;
  gap: 5px;
`;

const TerminalButton = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.color};
`;

const TerminalContent = styled.div`
  height: calc(100% - 50px);
  overflow-y: auto;
`;

const TerminalLine = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
`;

const CommandLine = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Prompt = styled.span`
  color: #85E89D;
  white-space: nowrap;
  padding: 5px;
`;

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const Command = styled.span`
  color: #B392F0;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  animation: ${typing} 1s steps(30, end);
`;

const Output = styled.div`
  color: #F0F6FC;
  white-space: pre-wrap;
  margin-top: 5px;
  padding-left: 20px;
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const ProjectList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 15px;
  padding: 10px;
`;

const ProjectItem = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  background-color: rgba(135, 206, 250, 0.1);
  border-radius: 5px;
  cursor: pointer;
  animation: ${fadeIn} 0.5s ease-out forwards;
  animation-delay: ${props => props.index * 0.1}s;
  opacity: 0;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(135, 206, 250, 0.2);
  }

  ${props => props.active && css`
    background-color: rgba(78, 201, 176, 0.2);
    box-shadow: 0 0 10px rgba(78, 201, 176, 0.3);
  `}
`;

const ProjectIcon = styled.span`
  margin-right: 10px;
  color: #4EC9B0;
`;

const ProjectName = styled.span`
  flex-grow: 1;
`;

const ProjectDetails = styled.div`
  margin-top: 20px;
  animation: ${fadeIn} 0.5s ease-out forwards;
`;

const ProjectTitle = styled.h3`
  color: #CE9178;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  margin-bottom: 10px;
`;

const ImageGallery = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  margin-top: 20px;
`;

const ProjectImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  cursor: pointer;
`;

const ImageNavButton = styled.button`
  background: none;
  border: none;
  color: #4EC9B0;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0 10px;
  &:hover {
    color: #569CD6;
  }
  ${props => props.disabled && css`
    opacity: 0.5;
    cursor: not-allowed;
  `}
`;

const ImageThumbnails = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  flex-wrap: wrap;
`;

const Thumbnail = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin: 0 5px 5px 0;
  cursor: pointer;
  border: 2px solid ${props => props.active ? '#4EC9B0' : 'transparent'};
`;

const ShowMoreButton = styled.button`
  background: none;
  border: 1px solid #4EC9B0;
  color: #4EC9B0;
  padding: 5px 10px;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    background-color: rgba(78, 201, 176, 0.1);
  }
`;

const ImageModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
`;

const projects = [
  {
    id: 1,
    name: 'Travel Reservation System',
    description: 'A comprehensive platform for booking flights, hotels, and activities. Implemented advanced search, price comparison, and secure payment processing.',
    technologies: 'Spring Boot, React, TypeScript, Flutter, Dart, Docker, Scrum, Tailwind, UML, MySQL',
    images: [
      'https://i.pinimg.com/564x/67/fa/bc/67fabcad5b7fb3a976bf89ecb1212d90.jpg',
      'https://i.pinimg.com/564x/01/2b/0b/012b0bc2e871fc073c8dbf8008bdf20e.jpg',
      'https://i.pinimg.com/564x/67/fa/bc/67fabcad5b7fb3a976bf89ecb1212d90.jpg',
    ]
  },
  {
    id: 2,
    name: 'Smart Parking System',
    description: 'An intelligent parking management solution with real-time availability. Integrated AI for demand prediction and computer vision for license plate recognition.',
    technologies: 'React.js, Generative AI, Spring Boot',
    images: [
      'https://i.pinimg.com/564x/67/fa/bc/67fabcad5b7fb3a976bf89ecb1212d90.jpg',
      'https://i.pinimg.com/564x/01/2b/0b/012b0bc2e871fc073c8dbf8008bdf20e.jpg',
      'https://i.pinimg.com/564x/01/2b/0b/012b0bc2e871fc073c8dbf8008bdf20e.jpg',
      'https://i.pinimg.com/564x/01/2b/0b/012b0bc2e871fc073c8dbf8008bdf20e.jpg',
    ]
  },
  // Add more projects as needed
];

function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [terminalOutput, setTerminalOutput] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAllThumbnails, setShowAllThumbnails] = useState(false);
  const terminalRef = useRef(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const addLine = (prompt, command, output) => {
    setTerminalOutput(prev => [...prev, { prompt, command, output }]);
  };

  const scrollToBottom = () => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    if (inView) {
      const commands = [
        { 
          prompt: 'hamza@projects:~$', 
          command: 'ls projects', 
          output: (
            <ProjectList>
              {projects.map((project, index) => (
                <ProjectItem 
                  key={project.id}
                  active={selectedProject && project.id === selectedProject.id}
                  onClick={() => handleProjectClick(project)}
                  index={index}
                >
                  <ProjectIcon>
                    {selectedProject && project.id === selectedProject.id ? <FaFolderOpen /> : <FaFolder />}
                  </ProjectIcon>
                  <ProjectName>{project.name}</ProjectName>
                </ProjectItem>
              ))}
            </ProjectList>
          )
        },
      ];

      const executeCommands = async () => {
        for (const cmd of commands) {
          await new Promise(resolve => setTimeout(resolve, 1000));
          addLine(cmd.prompt, cmd.command, cmd.output);
          scrollToBottom();
        }
      };

      executeCommands();
    }
  }, [inView]);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setShowAllThumbnails(false);
    
    // Clear previous project details
    setTerminalOutput(prev => prev.filter(line => line.command !== 'cat project_details.txt'));

    // Add new project details with animation delay
    setTimeout(() => {
      addLine('hamza@projects:~$', 'cat project_details.txt', (
        <ProjectDetails>
          <ProjectTitle>{project.name}</ProjectTitle>
          <ProjectDescription>{project.description}</ProjectDescription>
          <ProjectDescription><strong>Technologies:</strong> {project.technologies}</ProjectDescription>
          <ImageGallery>
            <ImageNavButton 
              onClick={() => handleImageChange(-1)} 
              disabled={currentImageIndex === 0}
            >
              <FaChevronLeft />
            </ImageNavButton>
            <ProjectImage 
              src={project.images[currentImageIndex]} 
              alt={`${project.name} screenshot`} 
              onClick={toggleModal}
            />
            <ImageNavButton 
              onClick={() => handleImageChange(1)} 
              disabled={currentImageIndex === project.images.length - 1}
            >
              <FaChevronRight />
            </ImageNavButton>
          </ImageGallery>
          <ImageThumbnails>
            {(showAllThumbnails ? project.images : project.images.slice(0, 3)).map((image, index) => (
              <Thumbnail
                key={index}
                src={image}
                alt={`${project.name} thumbnail ${index + 1}`}
                active={index === currentImageIndex}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </ImageThumbnails>
          {project.images.length > 3 && !showAllThumbnails && (
            <ShowMoreButton onClick={() => setShowAllThumbnails(true)}>
              Show More
            </ShowMoreButton>
          )}
        </ProjectDetails>
      ));
      scrollToBottom();
    }, 500);
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

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <ProjectSectionWrapper ref={ref}>
      <TerminalWindow>
        <TerminalHeader>
          <TerminalButtons>
            <TerminalButton color="#FF5F56" />
            <TerminalButton color="#FFBD2E" />
            <TerminalButton color="#27C93F" />
          </TerminalButtons>
          <TerminalTitle>Projects - Git Bash</TerminalTitle>
        </TerminalHeader>
        <TerminalContent ref={terminalRef}>
          {terminalOutput.map((line, index) => (
            <TerminalLine key={index}>
              <CommandLine>
                <Prompt>{line.prompt}</Prompt>
                <Command>{line.command}</Command>
              </CommandLine>
              {line.output && <Output>{line.output}</Output>}
            </TerminalLine>
          ))}
        </TerminalContent>
      </TerminalWindow>
      {isModalOpen && selectedProject && (
        <ImageModal>
          <CloseButton onClick={toggleModal}><FaTimes /></CloseButton>
          <ImageNavButton 
            onClick={() => handleImageChange(-1)} 
            disabled={currentImageIndex === 0}
          >
            <FaChevronLeft />
          </ImageNavButton>
          <ModalImage 
            src={selectedProject.images[currentImageIndex]} 
            alt={`${selectedProject.name} screenshot`} 
          />
       <ImageNavButton 
            onClick={() => handleImageChange(1)} 
            disabled={currentImageIndex === selectedProject.images.length - 1}
          >
            <FaChevronRight />
          </ImageNavButton>
        </ImageModal>
      )}
    </ProjectSectionWrapper>
  );
}

export default ProjectSection;