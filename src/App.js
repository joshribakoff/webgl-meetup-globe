import React, { Component } from "react";
import { webSocket } from "rxjs/webSocket";
import { map } from "rxjs/operators";
import styled from "styled-components";
import "./App.css";

const URL = "ws://stream.meetup.com/2/rsvps";

const Card = styled.div`
  padding: 5px;
  margin: 5px;
  display: flex;
`;

const MemberPhotoWrapper = styled.div`
  width: 70px;
  flex-shrink: 0;
  text-align: center;
  img {
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
`;

const MemberPhoto = ({ name, photo }) => (
  <MemberPhotoWrapper>
    {photo && <img src={photo} alt={`Avatar for ${name}`} />}
  </MemberPhotoWrapper>
);

const RsvpDetails = ({ name, group, city }) => (
  <div>
    <strong>{name}</strong> will meetup with<br />
    <strong>{group}</strong>
    <br />
    in {city}
  </div>
);

const Rsvp = ({ member_name, member_photo, group_name, group_city }) => (
  <Card>
    <MemberPhoto name={member_name} photo={member_photo} />
    <RsvpDetails name={member_name} group={group_name} city={group_city} />
  </Card>
);

let id = 0;

class App extends Component {
  state = { rsvps: [] };

  componentDidMount = () =>
    webSocket(URL)
      .pipe(map(rsvp => ({ ...rsvp, id: id++ })))
      .subscribe(this.handleRsvp);

  handleRsvp = rsvp =>
    this.setState(state => ({ rsvps: [rsvp, ...state.rsvps] }));

  renderCard = ({ id, member, group }) => (
    <Rsvp
      key={id}
      member_photo={member.photo}
      member_name={member.member_name}
      group_name={group.group_name}
      group_city={group.group_city}
    />
  );

  render() {
    return (
      <React.Fragment>{this.state.rsvps.map(this.renderCard)}</React.Fragment>
    );
  }
}

export default App;
