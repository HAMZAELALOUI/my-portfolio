import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import {
  ProjectDetails,
  ProjectTitle,
  ProjectDescription,
  ImageGallery,
  ProjectImage,
  ImageNavButton,
  ImageThumbnails,
  Thumbnail,
  ShowMoreButton
} from '../../styles/ProjectDetails.styles'

const ProjectDetailsComponent = ({
  project,
  currentImageIndex,
  showAllThumbnails,
  onImageChange,
  onThumbnailClick,
  onShowMoreClick,
  onImageClick
}) => {
  const handlePrevImage = () => {
    onImageChange(-1);
  };

  const handleNextImage = () => {
    onImageChange(1);
  };

  return (
    <ProjectDetails>
      <ProjectTitle>{project.name}</ProjectTitle>
      <ProjectDescription>{project.description}</ProjectDescription>
      <ProjectDescription><strong>Technologies:</strong> {project.technologies}</ProjectDescription>
      <ImageGallery>
        <ImageNavButton 
          onClick={handlePrevImage} 
          disabled={currentImageIndex === 0}
        >
          <FaChevronLeft />
        </ImageNavButton>
        <ProjectImage 
          src={project.images[currentImageIndex]} 
          alt={`${project.name} screenshot`} 
          onClick={onImageClick}
        />
        <ImageNavButton 
          onClick={handleNextImage} 
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
            onClick={() => onThumbnailClick(index)}
          />
        ))}
      </ImageThumbnails>
      {project.images.length > 3 && !showAllThumbnails && (
        <ShowMoreButton onClick={onShowMoreClick}>
          Show More
        </ShowMoreButton>
      )}
    </ProjectDetails>
  );
};

export default ProjectDetailsComponent;