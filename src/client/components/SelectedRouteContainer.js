import React from "react";
import axios from "axios";
import SuggestedRouteList from "./SuggestedRoutes/SuggestedRoutesList";
import { getAuthToken } from "../utilities/getTokenData";
export default class SelectedRouteContainer extends React.Component {
  state = {
    suggestedRoutes: [],
    suggested_route_id: null,
    vessel_reports_id: this.props.match.params.vessel_reports_id,
    voyage_id: this.props.match.params.voyage_id
  };
  componentDidUpdate(_, prevState) {
    if (prevState.suggested_route_id !== this.state.suggested_route_id) {
      this.fetchSuggestedRoutes();
      this.setState({
        suggested_route_id: null
      });
    }
  }
  handleSelectRoute = id => {
    const { vessel_reports_id } = this.state;

    const data = { suggested_route_id: id };
    axios
      .post(`api/vessel-reports/${vessel_reports_id}/select-route`, data, {
        headers: {
          "Content-Type": "application/json",
          authorization: getAuthToken()
        }
      })
      .then(
        response => {
          this.setState({ suggested_route_id: data.id });
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
    const { voyage_id, vessel_reports_id } = this.state;
    axios
      .get(`/api/vessel-reports/${vessel_reports_id}/suggested-routes`, {
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
      <SuggestedRouteList
        handleSelectRoute={this.handleSelectRoute}
        routeslist={suggestedRoutes}
      />
    );
  }
}
