import React from "react";
import { pure } from "recompose";
import IdentifierText from "../components/IdentifierText";
import RsvpDetailsWrapper from "../components/RsvpDetailsWrapper";

const RsvpDetails = pure(({ name, group, city }) => (
    <RsvpDetailsWrapper>
      <IdentifierText>{name}</IdentifierText> will meetup with<br />
      <IdentifierText>{group}</IdentifierText>
      <br />
      in {city}.
    </RsvpDetailsWrapper>
  ));

  export default RsvpDetails;