import React, { Component } from "react";
import StartVoyage from "./StartVoyage";

//import material UI
import { Paper, Grid } from "@material-ui/core";
import axios from "axios";
import camelcaseKeys from "camelcase-keys";

export default class CreateVoyageContainer extends Component {
  state = {
    vessels: [],
    ports: []
  };

  componentDidMount() {
    // TODO: We need to get vessels by organization
    axios
      .get(`/api/vessels/`)
      .then(response => {
        const vessels = camelcaseKeys(response.data).sort((a, b) =>
          a.name > b.name ? 1 : -1
        );
        this.setState({ vessels });
      })
      .catch(error => console.error(error));

    axios
      .get(`/api/ports`)
      .then(response => {
        const ports = camelcaseKeys(response.data).sort((a, b) =>
          a.name > b.name ? 1 : -1
        );

        this.setState({ ports });
      })
      .catch(error => console.error(error));
  }

  render() {
    const optimizationOptions = [
      { name: "Fixed ETA", value: "fixed_eta" },
      { name: "Earliest Arrival", value: "earliest_arrival" },
      { name: "Least Cost Arrival", value: "least_cost_arrival" }
    ];

    return (
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Grid item xs={10} md={8} width={1}>
          <Paper>
            <StartVoyage
              className="start-voyage-form"
              vessels={this.state.vessels}
              voyages={optimizationOptions}
              ports={this.state.ports}
            />
          </Paper>
        </Grid>
      </Grid>
    );
  }
}
