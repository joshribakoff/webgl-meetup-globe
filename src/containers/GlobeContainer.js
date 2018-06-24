import React, { Component } from "react";
import api from "../lib/globe";

class Singleton {}

const Instance = new Singleton();

class Globe extends Component {
  componentDidMount() {
    const container = document.getElementById("globe");
    Instance.api = new api.Globe(container);
    Instance.api.animate();
    Instance.api.foo = 'test';
  }

  shouldComponentUpdate = () => false;

  render() {
    return <div id="globe" style={{ flexGrow: 1 }} />;
  }
}

export default Globe;
export { Instance };
