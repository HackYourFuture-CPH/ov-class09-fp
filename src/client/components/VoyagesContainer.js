import React, { Component } from "react";
import VoyageList from "./VoyageList";
import { getTokenData } from "../utilities/getTokenData";
import axios from "axios";
import camelcaseKeys from "camelcase-keys";
import MapComponent from "./MapComponent";
import Marker from "./Marker";
import SecondaryNavigationBar from "../components/SecondaryNavigationBar";
import Grid from "@material-ui/core/Grid";

export default class VoyagesContainer extends Component {
  state = {
    // Get auth token from localstorage
    organizationId: getTokenData("organization_id"),
    voyages: [],
    vesselReports: []
  };

  // Get Voyages by organization. Response will be camelCased. Returns Promise.
  getVoyages(organizationId) {
    return new Promise((resolve, reject) => {
      axios
        .get(`/api/organizations/${organizationId}/voyages?status=ongoing`)
        .then(response => {
          resolve(camelcaseKeys(response.data.voyages));
        })
        .catch(error => reject(error));
    });
  }

  // Get Vessel Reports by voyage ID. Response will be camelCased. Returns Promise.
  async getLatestVesselReport(voyageId) {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `/api/voyages/${voyageId}/vessel-reports?orderBy=desc&limit=1&offset=0`
        )
        .then(response => {
          resolve(camelcaseKeys(response.data[0]));
        })
        .catch(error => reject(error));
    });
  }

  componentDidMount() {
    // Populate state from Voyages
    this.getVoyages(this.state.organizationId)
      .then(voyages => {
        this.setState({ voyages });
      })
      .then(() => {
        // Populate state from Vessel Reports
        this.state.voyages.map(voyage => {
          this.getLatestVesselReport(voyage.id).then(vesselReport => {
            this.setState({
              vesselReports: [...this.state.vesselReports, vesselReport]
            });
          });
        });
      });
  }

  render() {
    //console.log("Voyages container:", vesselReports)
    return (
      <div>
        <SecondaryNavigationBar />
        <MapComponent
          vesselReports={this.state.vesselReports}
          options={mapOptions}
        />
        <VoyageList voyages={this.state.voyages} />
        <Grid container>
          <Grid item xs={8}>
            <MapComponent
              vesselReports={this.state.vesselReports}
              options={mapOptions}
            />
          </Grid>
          <Grid item xs={4}>
            <VoyageList voyages={this.state.voyages} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

// Configuration object for Map
const mapOptions = {
  centerMapCoordinates: [12.5244140625, 55.640398956687356],
  zoom: 1,
  style: {
    color: {
      suggestedRoute: "#F8AA13",
      elapsedRoute: "#1353F8"
    },
    marker: {
      markerComponent: null,
      color: "blue",
      fill: true,
      fillColor: "blue",
      fillOpacity: 0.8,
      radius: 4
    },
    polyline: {
      dashArray: "10,5",
      lineJoin: "round",
      weight: 5,
      opacity: 0.7,
      color: "blue",
      stroke: true
    }
  }
};
