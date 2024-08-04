import React from 'react';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import {
  ImageModal,
  ModalImage,
  CloseButton,
  ImageNavButton
} from '../../styles/ImageModal.styles';

const ImageModalComponent = ({ project, currentImageIndex, onClose, onImageChange }) => (
  <ImageModal>
    <CloseButton onClick={onClose}><FaTimes /></CloseButton>
    <ImageNavButton 
      onClick={() => onImageChange(-1)} 
      disabled={currentImageIndex === 0}
    >
      <FaChevronLeft />
    </ImageNavButton>
    <ModalImage 
      src={project.images[currentImageIndex]} 
      alt={`${project.name} screenshot`} 
    />
    <ImageNavButton 
      onClick={() => onImageChange(1)} 
      disabled={currentImageIndex === project.images.length - 1}
    >
      <FaChevronRight />
    </ImageNavButton>
  </ImageModal>
);

export default ImageModalComponent;