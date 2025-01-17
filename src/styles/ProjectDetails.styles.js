import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const ProjectDetails = styled.div`
  margin-top: 20px;
  animation: ${fadeIn} 0.5s ease-out forwards;

  @media (max-width: 768px) {
    margin-top: 15px;
  }
`;

export const ProjectTitle = styled.h3`
  color: #CE9178;
  margin-bottom: 10px;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 8px;
  }
`;

export const ProjectDescription = styled.p`
  margin-bottom: 10px;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 8px;
  }
`;

export const ImageGallery = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  margin-top: 20px;

  @media (max-width: 768px) {
    height: 250px;
    margin-top: 15px;
  }

  @media (max-width: 480px) {
    height: 200px;
    margin-top: 10px;
  }
`;

export const ProjectImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  cursor: pointer;
`;

export const ImageNavButton = styled.button`
  background: none;
  border: none;
  color: #4EC9B0;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0 10px;
  &:hover {
    color: #569CD6;
  }
  ${props => props.disabled && `
    opacity: 0.5;
    cursor: not-allowed;
  `}

  @media (max-width: 768px) {
    font-size: 1.3rem;
    padding: 0 8px;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    padding: 0 5px;
  }
`;

export const ImageThumbnails = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    margin-top: 8px;
  }
`;

export const Thumbnail = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin: 0 5px 5px 0;
  cursor: pointer;
  border: 2px solid ${props => props.active ? '#4EC9B0' : 'transparent'};

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    margin: 0 4px 4px 0;
  }

  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
    margin: 0 3px 3px 0;
  }
`;

export const ShowMoreButton = styled.button`
  background: none;
  border: 1px solid #4EC9B0;
  color: #4EC9B0;
  padding: 5px 10px;
  cursor: pointer;
  margin-top: 10px;
  font-size: 0.9rem;
  &:hover {
    background-color: rgba(78, 201, 176, 0.1);
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 4px 8px;
    margin-top: 8px;
  }
`;