import React from "react";
import axios from "axios";
import SuggestedRouteList from "./SuggestedRoutes/SuggestedRoutesList";
import { getAuthToken } from "../utilities/getTokenData";
import SecondaryNavigationBar from "../components/SecondaryNavigationBar";

export default class SelectedRouteContainer extends React.Component {
  state = {
    suggestedRoutes: [],
    suggestedRouteID: null,
    vesselReportId: this.props.match.params.vessel_reports_id,
    voyageId: this.props.match.params.voyage_id
  };
  componentDidUpdate(_, prevState) {
    if (prevState.suggestedRouteID !== this.state.suggestedRouteID) {
      this.fetchSuggestedRoutes();
      this.setState({
        suggestedRouteID: null
      });
    }
  }
  handleSelectRoute = id => {
    const { vesselReportId } = this.state;

    const data = { suggested_route_id: id };
    axios
      .post(`api/vessel-reports/${vesselReportId}/select-route`, data, {
        headers: {
          "Content-Type": "application/json",
          authorization: getAuthToken()
        }
      })
      .then(
        response => {
          this.setState({ suggestedRouteID: data.id });
        },
        error => {
          console.log(error);
        }
      );
  };
  componentDidMount() {
    this.fetchSuggestedRoutes();
  }
  fetchSuggestedRoutes = () => {
    const { voyageId, vesselReportId } = this.state;
    axios
      .get(`/api/vessel-reports/${vesselReportId}/suggested-routes`, {
        headers: {
          "Content-Type": "application/json",
          authorization: getAuthToken()
        }
      })
      .then(data =>
        this.setState({
          suggestedRoutes: data.data
        })
      );
  };

  render() {
    const { suggestedRoutes } = this.state;
    return (
      <>
        <SecondaryNavigationBar />
        <SuggestedRouteList
          handleSelectRoute={this.handleSelectRoute}
          routeslist={suggestedRoutes}
        />
      </>
    );
  }
}
