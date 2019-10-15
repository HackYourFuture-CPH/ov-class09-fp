import React, { Component } from "react";
import VoyageList from "./VoyageList";
import Map from "./VesselsOnMap";

export class VoyagesContainer extends Component {
  constructor(props) {
    super(props);

    this.emptyArray = [];
    this.state = {
      currentVoyages: []
    };
  }

  FetchVesselReport(elem) {
    fetch(
      `/api/voyages/${elem.id}/vessel-reports?offset=0&limit=50&orderBy="desc"`,
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
        elem["eta"] = vesselReportData[0].eta;
        elem["latitude"] = vesselReportData[0].latitude;
        elem["longitude"] = vesselReportData[0].longitude;
        this.emptyArray = [...this.emptyArray, elem];
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
        voyageData.voyages.map(elem => this.FetchVesselReport(elem));
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
