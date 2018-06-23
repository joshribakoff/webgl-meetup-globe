import React, { Component } from "react";
import { webSocket } from "rxjs/webSocket";
import styled from "styled-components";
import "./App.css";

const URL = "ws://stream.meetup.com/2/rsvps";

const Card = styled.div`
padding: 5px;
margin: 5px;
`

const Rsvp = ({ member_name, member_photo, group_name, group_city }) => (
  <Card>
    <img src={member_photo} />
    <strong>{member_name}</strong> will meetup with<br />
    <strong>{group_name}</strong>
    <br />in {group_city}
  </Card>
);

class App extends Component {
  state = { rsvps: [] };

  componentDidMount = () => webSocket(URL).subscribe(this.handleRsvp);

  handleRsvp = rsvp =>
    this.setState(state => ({ rsvps: [rsvp, ...state.rsvps] }));

  renderCard = ({ member, group }) => (
    <Rsvp
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
