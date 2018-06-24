import React from "react";
import MemberPhotoWrapper from "../components/MemberPhotoWrapper";

const MemberPhoto = ({ name, photo }) => (
    <MemberPhotoWrapper>
      {photo && <img src={photo} alt={`Avatar for ${name}`} />}
    </MemberPhotoWrapper>
  );

  export default MemberPhoto;