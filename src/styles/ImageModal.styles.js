import styled from 'styled-components';

export const ImageModal = styled.div`
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

export const ModalImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;

  @media (max-width: 768px) {
    max-width: 95%;
    max-height: 95%;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;

  @media (max-width: 768px) {
    top: 10px;
    right: 10px;
    font-size: 1.5rem;
  }
`;

export const ImageNavButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  padding: 0 20px;
  &:hover {
    color: #4EC9B0;
  }
  ${props => props.disabled && `
    opacity: 0.5;
    cursor: not-allowed;
  `}

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 0 10px;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    padding: 0 5px;
  }
`;