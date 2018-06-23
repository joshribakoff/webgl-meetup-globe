import React, { Component } from "react";
import { webSocket } from "rxjs/webSocket";
import { map } from "rxjs/operators";
import styled, { keyframes } from "styled-components";
import "./App.css";

const URL = "ws://stream.meetup.com/2/rsvps";

const Sidebar = styled.div`
  background: rgb(14, 40, 58);
  width: 100vw;
  height: 100vh;
  position: fixed;
  overflow: auto;
  color: white;
`;

const Identifier = styled.span`
  color: rgb(255, 186, 0);
  font-wieight: bold;
`

const slidedown = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50px);
    background: purple;
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    background: transparent;
  }
`;

const Card = styled.div`
  padding: 5px;
  margin: 5px;
  display: flex;
  animation: ${slidedown} 0.7s ease;
`;

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

const RsvpDetailsWrapper = styled.div`
  line-height: 1.5;
`;

const MemberPhoto = ({ name, photo }) => (
  <MemberPhotoWrapper>
    {photo && <img src={photo} alt={`Avatar for ${name}`} />}
  </MemberPhotoWrapper>
);

const RsvpDetails = ({ name, group, city }) => (
  <RsvpDetailsWrapper>
    <Identifier>{name}</Identifier> will meetup with<br />
    <Identifier>{group}</Identifier><br />
    in {city}.
  </RsvpDetailsWrapper>
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
      <Sidebar>{this.state.rsvps.map(this.renderCard)}</Sidebar>
    );
  }
}

export default App;
