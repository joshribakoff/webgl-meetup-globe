import React, { Component } from "react";
import { webSocket } from "rxjs/webSocket";
import { of } from "rxjs";
import { map, tap, catchError, switchMap } from "rxjs/operators";
import { pure } from "recompose";
import { v4 as id } from "uuid";
import GlobeContainer, { Instance as globe } from "../containers/GlobeContainer";
import Page from "../components/Page";
import Sidebar from "../components/Sidebar";
import IdentifierText from "../components/IdentifierText";
import Card from "../components/Card";
import MemberPhotoWrapper from "../components/MemberPhotoWrapper";
import RsvpDetailsWrapper from "../components/RsvpDetailsWrapper";
import MemberPhoto from "../components/MemberPhoto";

const URL = "wss://stream.meetup.com/2/rsvps";

const noOp = () => {};

const RsvpDetails = pure(({ name, group, city }) => (
  <RsvpDetailsWrapper>
    <IdentifierText>{name}</IdentifierText> will meetup with<br />
    <IdentifierText>{group}</IdentifierText>
    <br />
    in {city}.
  </RsvpDetailsWrapper>
));

const Rsvp = ({ member_name, member_photo, group_name, group_city }) => (
  <Card>
    <MemberPhoto name={member_name} photo={member_photo} />
    <RsvpDetails name={member_name} group={group_name} city={group_city} />
  </Card>
);

class VisualizerContainer extends Component {
  state = { rsvps: [] };

  componentDidMount = () =>
    webSocket(URL)
      .pipe(map(rsvp => ({ ...rsvp, id: id() })))
      .pipe(tap(this.handleRsvp))
      .pipe(this.tryPlot)
      .subscribe();

  // It may fail if `rsvp.venue` is missing or `globe.api` is not initialized.
  tryPlot = switchMap(rsvp => of(rsvp).pipe(tap(this.plot)).pipe(catchError(noOp)));

  plot = ({ venue, guests, rsvp_id }) => {
    const magnitude = guests === 0 ? 0.1 : guests / 10 + 0.1;
    globe.api.addData([venue.lat, venue.lon, magnitude], {
      format: "magnitude",
      name: rsvp_id
    });
    globe.api.createPoints();
  };

  handleRsvp = rsvp =>
    this.setState(state => ({ rsvps: [rsvp, ...state.rsvps.slice(0, 100)] }));

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
      <Page>
        <Sidebar>{this.state.rsvps.map(this.renderCard)}</Sidebar>
        <GlobeContainer />
      </Page>
    );
  }
}

export default VisualizerContainer;
