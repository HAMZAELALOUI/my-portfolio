import styled ,{keyframes} from 'styled-components';

const cursorBlink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const Cursor = styled.span`
  display: inline-block;
  width: 8px;
  height: 15px;
  background-color: #4DFFF3;
  margin-left: 5px;
  animation: ${cursorBlink} 0.8s infinite;
  box-shadow: 0 0 5px rgba(77, 255, 243, 0.5);
`;

export default Cursor;
