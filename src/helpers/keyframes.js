import { keyframes } from "styled-components";

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

export default slidedown;