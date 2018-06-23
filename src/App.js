import React, { Component } from "react";
import { webSocket } from "rxjs/webSocket";
import "./App.css";

const URL = "ws://stream.meetup.com/2/rsvps";

class App extends Component {
  state = { rsvps: [] };

  componentDidMount = () => webSocket(URL).subscribe(this.handleRsvp);

  handleRsvp = rsvp =>
    this.setState(state => ({ rsvps: [...state.rsvps, rsvp] }));

  render() {
    return <pre>{JSON.stringify(this.state.rsvps, null, 2)}</pre>;
  }
}

export default App;
