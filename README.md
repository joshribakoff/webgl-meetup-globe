# Realtime WebGL Meetup.com Globe
The goal of this project is to visualize live meetup.com RSVPs on an interactive webGL globe.

![screenshot](https://raw.githubusercontent.com/joshribakoff/webgl-meetup-globe/master/screenshot.png)

The React app consists of a split view, with cards animating into a list on a sidebar, and a live updated webGL globe using three.js. It uses rxJS streams to consume the meetup.com real time websockets API.

# License
https://www.opensource.org/licenses/mit-license.php

# Todo
Stretch goals will include allowing the user to filter the data using geofencing, keywords, etc.

# Links
- https://www.meetup.com/meetup_api/docs/stream/2/rsvps/
- https://experiments.withgoogle.com/chrome/globe
- https://github.com/ReactiveX/rxjs
