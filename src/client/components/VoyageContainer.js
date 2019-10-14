import React, { Component } from "react";

export class VoyageContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      voyages: [],
      vesselsPosition: []
    };
  }

  componentDidMount() {
    fetch("/api/organizations/7/voyages?status=ongoing", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6InN1cGVydXNlciIsImlhdCI6MTU3MTA3MjQ1NiwiZXhwIjoxNTcxMTA4NDU2fQ.cnCWwRmvIYksUIy5yc5zcTYDuUN_OO05lVO2jT8wkDs"
      }
    })
      .then(res => res.json())
      .then(data => this.setState({ voyages: data }));
  }

  render() {
    return <div></div>;
  }
}

export default VoyageContainer;
