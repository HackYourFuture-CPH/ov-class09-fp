import React, { Component } from "react";
import axios from "axios";

export default class VoyageDetailsContainer extends Component {
  state = {
    voyageId: this.props.match.params.voyage_id,
    vessel_report: [],
    suggested_routes: [],
    vessel_report_id: []
  };
  componentDidMount() {
    const headerObject = {
      // method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6InN1cGVydXNlciIsImlhdCI6MTU3MTI1MjM3NCwiZXhwIjoxNTcxMjg4Mzc0fQ.iYsferWTr1pKoXXtUdhF3N52cHFaYUBjUllK2OxeA7k"
      }
    };
    console.log("Inside the component didcomponent");
    axios
      .get(`/api/voyages/${this.state.voyageId}/vessel-reports`, headerObject)
      .then(data => (data = data.data))
      .then(data =>
        this.setState({
          vessel_report: data,
          vessel_report_id: data.map(({ id }) => id)
        })
      );

    axios
      .get("/api/vessel-reports/956/suggested-routes", headerObject)
      .then(data => (data = data.data))
      .then(data =>
        this.setState({
          suggested_routes: data
        })
      );

    /*  axios
      .get(`/api/voyages/${this.state.voyageId}/vessel-reports`, headerObject)
      .then(data =>
        this.setState({
          vessel_report: data.data,
          vessel_report_id: data.data.map(({ id }) => id)
        })
      );
    console.log("this.state.vessel_report_id", this.state.vessel_report_id);
    
      axios
        .get(`/api/vessel-reports/${id}/suggested-routes`, headerObject)
        .then(data =>
          this.setState({
            suggested_routes: data.data
          })
        );
    });

     axios
      .get(
        `/api/vessel-reports/${
          this.state.vessel_report_id[0]
        }/suggested-routes`,
        headerObject
      )
      .then()
      .then(data =>
        this.setState({
          suggested_routes: data.data
        })
      );*/
  }
  render() {
    console.log(this.state);
    //console.log(this.state.vessel_report_id[0]);

    return <div></div>;
  }
}
