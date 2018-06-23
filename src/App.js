import React, { Component } from "react";
import { webSocket } from "rxjs/webSocket";
import "./App.css";

class App extends Component {
  state = { rsvps: [] };

  async componentDidMount() {
    const subject = webSocket("ws://stream.meetup.com/2/rsvps");
    subject.subscribe(rsvp =>
      this.setState(state => ({ rsvps: [...state.rsvps, rsvp] }))
    );
  }

  render() {
    return <div>{JSON.stringify(this.state.rsvps)}</div>;
  }
}

export default App;
