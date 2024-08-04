import styled from 'styled-components';

const SocialLink = styled.a`
  color: #8EBBFF;
  font-size: 1.2rem;
  margin-right: 15px;
  transition: all 0.3s ease;
  text-shadow: 0 0 5px rgba(142, 187, 255, 0.5);

  &:hover {
    color: #4DFFF3;
    text-shadow: 0 0 8px rgba(77, 255, 243, 0.7);
    transform: translateY(-2px);
  }
`;

export default SocialLink;
