import React, { Component } from "react";

import { Link } from "react-router-dom";
import Map from "./components/Map";
class Home extends Component {
  render() {
    return (
      <section>
        <Map />
      </section>
    );
  }
}

export default Home;
