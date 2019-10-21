import React, { Component } from "react";
import axios from "axios";
import VoyageDetails from "./VoyageDetails";
import CostWidget from "./CostWidget";
import SuggestedRouteTable from "./SuggestedRouteTable";
import camelcaseKeys from "camelcase-keys";
import MapComponent from "./MapComponent";
import Marker from "./Marker";
import Grid from "@material-ui/core/Grid";

export default class VoyageDetailsContainer extends Component {
  state = {
    voyageId: this.props.match.params.voyage_id,
    voyage: {},
    vesselReports: [],
    latestVesselReport: {},
    selectedRoute: [],
    departFromPort: "",
    arriveAtPort: "",
    vessel: {}
  };

  componentDidMount() {
    axios
      .get(`/api/voyages/${this.state.voyageId}`)
      .then(voyage => {
        this.setState({
          voyage: camelcaseKeys(voyage.data[0])
        });
      })
      .then(() => {
        // TODO: This should come from get voyage by ID endpoint
        axios
          .get(`/api/ports/${this.state.voyage.departFromPort}`)
          .then(departFromPort => {
            this.setState({
              departFromPort: departFromPort.data[0].name
            });
          });

        // TODO: This should come from get voyage by ID endpoint
        axios
          .get(`/api/ports/${this.state.voyage.arriveAtPort}`)
          .then(arriveAtPort => {
            this.setState({
              arriveAtPort: arriveAtPort.data[0].name
            });
          });

        // TODO: This should come from get voyage by ID endpoint
        axios.get(`/api/vessels/${this.state.voyage.vesselId}`).then(vessel => {
          this.setState({ vessel: camelcaseKeys(vessel.data[0]) });
        });
      });

    axios
      .get(`/api/voyages/${this.state.voyageId}/vessel-reports`)
      .then(vesselReports => {
        const vesselReportsData = camelcaseKeys(vesselReports.data);

        this.setState({
          vesselReports: vesselReportsData,
          latestVesselReport: vesselReportsData[0]
        });
      })
      .then(() => {
        axios
          .get(
            `/api/vessel-reports/${this.state.latestVesselReport.id}/select-route/`
          )
          .then(selectedRoute => {
            const selectedRouteId = selectedRoute.data[0].id;
            axios
              .get(`/api/suggested-routes/${selectedRouteId}`)
              .then(selectedRoute => {
                this.setState({
                  selectedRoute: camelcaseKeys(selectedRoute.data, {
                    deep: true
                  })
                });
              });
          });
      })
      .catch(error => console.error(error));
  }

  render() {
    const {
      voyage,
      vesselReports,
      latestVesselReport,
      departFromPort,
      arriveAtPort,
      vessel,
      selectedRoute
    } = this.state;

    let totalCost = 0;

    if (selectedRoute.length > 0 && selectedRoute[0].totalCost) {
      totalCost = selectedRoute[0].totalCost;
    }

    // Configuration object for Map
    const mapOptions = {
      centerMapCoordinates: [12.5244140625, 55.640398956687356],
      // isElapsedRoute: true,
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
          color: "orange",
          stroke: true
        }
      }
    };

    return (
      <>
        <Grid container spacing={1}>
          <Grid item xs={8}>
            <MapComponent
              vesselReports={vesselReports}
              suggestedRoutes={selectedRoute}
              options={mapOptions}
            />
          </Grid>
          <Grid container item xs={4} alignContent={"flex-start"}>
            <VoyageDetails
              vesselName={vessel.name}
              departFrom={departFromPort}
              arriveAt={arriveAtPort}
              etd={voyage.departureTime}
              eta={latestVesselReport.eta}
              date={latestVesselReport.createdAt}
              latitude={parseFloat(latestVesselReport.latitude)}
              longitude={parseFloat(latestVesselReport.longitude)}
              hsfo={latestVesselReport.hfoConsumption}
              ulsfo={latestVesselReport.lsfoConsumption}
            />
            {selectedRoute.length > 0 && (
              <CostWidget
                totalCost={totalCost}
                hfoCost={voyage.hfoCost}
                lsfoCost={voyage.lsfoCost}
                hfoConsumption={latestVesselReport.hfoConsumption}
                lsfoConsumption={latestVesselReport.lsfoConsumption}
              />
            )}
            {selectedRoute.length > 0 && selectedRoute[0].waypoints && (
              <SuggestedRouteTable
                data={selectedRoute[0].waypoints}
                tableNames={[
                  "DATE",
                  "LATITUDE",
                  "LONGTIDUE",
                  "SPEED",
                  "EST.RPM"
                ]}
              />
            )}
          </Grid>
        </Grid>
      </>
    );
  }
}
