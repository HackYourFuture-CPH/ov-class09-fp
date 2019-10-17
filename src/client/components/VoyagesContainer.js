import React, { Component } from "react";
import VoyageList from "./VoyageList";
import Map from "./Map";
import axios from "axios";
import getTokenData from "../utilities/getTokenData";

export class VoyagesContainer extends Component {
  constructor(props) {
    super(props);
    this.headersObject = {
      headers: {
        "Content-Type": "application/json",
        authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6InN1cGVydXNlciIsImlhdCI6MTU3MTMwMzgxOCwiZXhwIjoxNTcxMzM5ODE4fQ.luA1YJM-_d1GzkaD8g1uVw5ZgboKT48lZiQZv4co_78"
      }
    };
    this.emptyArray = [];
    this.state = {
      currentVoyages: []
    };
  }

  FetchVesselReport(voyage) {
    axios
      .get(
        `/api/voyages/${voyage.id}/vessel-reports?offset=0&limit=50&orderBy="desc"`,
        this.headersObject
      )
      .then(res => {
        voyage["vessel_reports"] = [res.data[0]];
        this.emptyArray = [...this.emptyArray, voyage];
      })
      .then(() =>
        this.setState({ currentVoyages: this.emptyArray }, () =>
          console.log(this.state)
        )
      );
  }

  componentDidMount() {
    // const { organization_id } = this.props;
    // const organization_id = 3;
    const organization_id = getTokenData("organization_id");

    axios
      .get(
        `/api/organizations/${organization_id}/voyages?status=ongoing`,
        this.headersObject
      )
      .then(res => {
        res.data.voyages.map(voyage => this.FetchVesselReport(voyage));
      });
  }

  render() {
    const { currentVoyages } = this.state;
    const centerMapCoordinates = [0, 0];
    const pathColor = "red";
    const displayMarkers = true;
    if (currentVoyages.length > 0) {
      return (
        <div>
          <Map
            centerMapCoordinates={centerMapCoordinates}
            displayMarkers={displayMarkers}
            pathColor={pathColor}
            vessels={currentVoyages}
          />
          <VoyageList voyages={currentVoyages} />
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default VoyagesContainer;
