import React from "react";
import Card from "../components/Card";
import MemberPhoto from "../components/MemberPhoto";
import RsvpDetails from "../components/RsvpDetails";

const Rsvp = ({ member_name, member_photo, group_name, group_city }) => (
    <Card>
      <MemberPhoto name={member_name} photo={member_photo} />
      <RsvpDetails name={member_name} group={group_name} city={group_city} />
    </Card>
  );

  export default Rsvp;
  