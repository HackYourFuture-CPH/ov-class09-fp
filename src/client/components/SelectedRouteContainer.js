import React from "react";
import axios from "axios";
import SuggestedRouteList from "./SuggestedRoutes/SuggestedRoutesList";
import Grid from "@material-ui/core/Grid";
import MapComponent from "./MapComponent";
import ScrollWrapper from "./ScrollWrapper";
import { mapOptions } from "../utilities/mapConfiguration";

export default class SelectedRouteContainer extends React.Component {
  state = {
    suggestedRoutes: [],
    suggestedRouteID: null,
    vesselReports: [],
    selectedRoutes: [],
    vesselReportId: this.props.match.params.vessel_reports_id,
    voyageId: this.props.match.params.voyage_id
  };
  componentDidUpdate(_, prevState) {
    if (prevState.suggestedRouteID !== this.state.suggestedRouteID) {
      this.getSuggestedRoutes();
      this.setState({
        suggestedRouteID: null
      });
    }
  }
  handleSelectRoute = id => {
    const { vesselReportId } = this.state;
    const selectedRoutes = this.state.suggestedRoutes.filter(
      suggestedRoute => suggestedRoute.id === id
    );
    const data = { suggested_route_id: id };
    axios.post(`api/vessel-reports/${vesselReportId}/select-route`, data).then(
      response => {
        this.setState({
          suggestedRouteID: data.id,
          selectedRoutes: selectedRoutes
        });
      },
      error => {
        console.log(error);
      }
    );
  };
  componentDidMount() {
    const { voyageId } = this.state;
    axios
      .get(`api/voyages/${voyageId}/vessel-reports`)
      .then(data =>
        this.setState({
          vesselReports: data.data
        })
      )
      .then(() => this.getSuggestedRoutes());
  }
  getSuggestedRoutes = () => {
    const { vesselReportId } = this.state;

    axios
      .get(`/api/vessel-reports/${vesselReportId}/suggested-routes`)
      .then(suggestedRoutes => {
        let selectedRoutes = [];
        if (this.state.vesselReports.length > 0) {
          selectedRoutes = suggestedRoutes.data.filter(
            suggestedRoute =>
              suggestedRoute.id ===
              this.state.vesselReports[0].selected_route_id
          );
        }
        this.setState({
          suggestedRoutes: suggestedRoutes.data
        });
      })
      .then(() => {
        axios
          .get(`/api/vessel-reports/${vesselReportId}/select-route`)
          .then(selectedRoute => {
            this.setState({
              selectedRoutes: [selectedRoute.data]
            });
          });
      });
  };
  render() {
    const { suggestedRoutes, vesselReports, selectedRoutes } = this.state;
    return (
      <div>
        <Grid container>
          <Grid item xs={8}>
            <MapComponent
              vesselReports={vesselReports}
              suggestedRoutes={selectedRoutes}
              options={mapOptions}
            />
          </Grid>
          <Grid item xs={4}>
            <ScrollWrapper height="calc(100vh - 64px)">
              <SuggestedRouteList
                handleSelectRoute={this.handleSelectRoute}
                routeslist={suggestedRoutes}
              />
            </ScrollWrapper>
          </Grid>
        </Grid>
      </div>
    );
  }
}
