import React from "react";
import axios from "axios";

export default class SelectedRouteContainer extends React.Component {
  componentDidMount() {
    console.log("this is props", this.props.match.params.voyage_id);
    const { voyage_id } = this.props.match.params;
    axios
      .get(`http://localhost:3000/api/vessel-reports/3/suggested-routes`, {
        headers: {
          authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6InN1cGVydXNlciIsImlhdCI6MTU3MTIxNzY5MiwiZXhwIjoxNTcxMjUzNjkyfQ.GLBygWbn6nO6M-ly4ACX7wKefIXpq4wT6ocLUjzdV-M"
        }
      })
      .then(data => console.log(data));
  }

  render() {
    console.log(this.props.match);
    return <div>hello</div>;
  }
}
