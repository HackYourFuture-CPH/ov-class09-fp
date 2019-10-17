import React, { Component } from "react";
import VoyageList from "./VoyageList";
//import Map from "./VesselsOnMap";

export class VoyagesContainer extends Component {
  constructor(props) {
    super(props);

    this.emptyArray = [];
    this.state = {
      currentVoyages: []
    };
  }

  FetchVesselReport(voyage) {
    fetch(
      `/api/voyages/${voyage.id}/vessel-reports?offset=0&limit=50&orderBy="desc"`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6InN1cGVydXNlciIsImlhdCI6MTU3MTE1NTg1NiwiZXhwIjoxNTcxMTkxODU2fQ.iUbAtbxDl7DXiWhsxIct9aNR9ezd3AcQpALn7NUD_Gk"
        }
      }
    )
      .then(res => res.json())
      .then(vesselReportData => {
        voyage["eta"] = vesselReportData[0].eta;
        voyage["latitude"] = vesselReportData[0].latitude;
        voyage["longitude"] = vesselReportData[0].longitude;
        this.emptyArray = [...this.emptyArray, voyage];
      })
      .then(() => this.setState({ currentVoyages: this.emptyArray }));
  }

  componentDidMount() {
    // const { orgnaization_id } = this.props;
    const orgnaization_id = 3;

    fetch(`/api/organizations/${orgnaization_id}/voyages?status=ongoing`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6InN1cGVydXNlciIsImlhdCI6MTU3MTE1NTg1NiwiZXhwIjoxNTcxMTkxODU2fQ.iUbAtbxDl7DXiWhsxIct9aNR9ezd3AcQpALn7NUD_Gk"
      }
    })
      .then(res => res.json())
      .then(voyageData => {
        voyageData.voyages.map(voyage => this.FetchVesselReport(voyage));
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
          <VoyageList voyages={currentVoyages} />
        </div>
      );
    }
  }
}

export default VoyagesContainer;
/*
 <Map
            centerMapCoordinates={centerMapCoordinates}
            displayMarkers={displayMarkers}
            pathColor={pathColor}
            vessels={currentVoyages}
          /> */
