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

  FetchVesselReport(voyage) {
    fetch(
      `/api/voyages/${voyage.id}/vessel-reports?offset=0&limit=50&orderBy="desc"`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6InN1cGVydXNlciIsImlhdCI6MTU3MTI0MzUxNywiZXhwIjoxNTcxMjc5NTE3fQ.RfZyHFCxPh8Qot4lQP8IGfIfj0gPZL0zdUj2z4KtRZU"
        }
      }
    )
      .then(res => res.json())
      .then(vesselReportData => {
        // voyage["eta"] = vesselReportData[0].eta;
        // voyage["latitude"] = vesselReportData[0].latitude;
        // voyage["longitude"] = vesselReportData[0].longitude;
        // vesselObj["vessel_id"] = voyage.vessel_id;
        // vesselObj["vessel_reports"] = [
        //   {
        //     'latitude': vesselReportData[0].latitude,
        //     'longitude': vesselReportData[0].longitude
        //   }
        // ];
        voyage["vessel_reports"] = [vesselReportData[0]];
        this.emptyArray = [...this.emptyArray, voyage];
      })
      .then(() =>
        this.setState({ currentVoyages: this.emptyArray }, () =>
          console.log(this.state)
        )
      );
  }

  componentDidMount() {
    // const { orgnaization_id } = this.props;
    const orgnaization_id = 3;

    fetch(`/api/organizations/${orgnaization_id}/voyages?status=ongoing`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6InN1cGVydXNlciIsImlhdCI6MTU3MTI0MzUxNywiZXhwIjoxNTcxMjc5NTE3fQ.RfZyHFCxPh8Qot4lQP8IGfIfj0gPZL0zdUj2z4KtRZU"
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
