import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: ${props => props.theme.colors.background};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ImageContainer = styled.div`
  height: 200px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 1rem;
`;

const Title = styled.h3`
  margin-bottom: 0.5rem;
  font-family: ${props => props.theme.fonts.heading};
`;

const Description = styled.p`
  margin-bottom: 1rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechItem = styled.span`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.lightText};
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
`;

const ProjectCard = ({ title, description, image, techStack }) => {
  return (
    <Card>
      <ImageContainer>
        {image && <Image src={image} alt={title} />}
      </ImageContainer>
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        {techStack && techStack.length > 0 && (
          <TechStack>
            {techStack.map((tech, index) => (
              <TechItem key={index}>{tech}</TechItem>
            ))}
          </TechStack>
        )}
      </Content>
    </Card>
  );
};

export default ProjectCard;