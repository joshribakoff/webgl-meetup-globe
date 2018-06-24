import styled, { keyframes } from "styled-components";

const slidedown = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Card = styled.div`
  padding: 5px;
  margin: 5px;
  display: flex;
  animation: ${slidedown} 0.7s ease;
`;

export default Card;