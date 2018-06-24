import styled from "styled-components";
import slidedown from "../helpers/keyframes";

const Card = styled.div`
  padding: 5px;
  margin: 5px;
  display: flex;
  animation: ${slidedown} 0.7s ease;
`;

export default Card;