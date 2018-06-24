# webgl-meetup-globe
The goal of this project is to visualize live meetup.com data on a webGL globe.

![screenshot](https://raw.githubusercontent.com/joshribakoff/webgl-meetup-globe/master/screenshot.png)

The React app consists of a split view, with cards animating into a list on a sidebar, and a live updated webGL globe. It uses rxJS streams to consume the meetup.com real time websockets API.

# todo
Stretch goals will include allowing the user to filter the data using geofencing, keywords, etc.

# useful links
- https://www.meetup.com/meetup_api/docs/stream/2/rsvps/
- https://experiments.withgoogle.com/chrome/globe
- https://github.com/ReactiveX/rxjs
