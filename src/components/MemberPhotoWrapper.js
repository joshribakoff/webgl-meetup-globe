import styled from "styled-components";

const MemberPhotoWrapper = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  text-align: center;
  img {
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
`;

export default MemberPhotoWrapper;