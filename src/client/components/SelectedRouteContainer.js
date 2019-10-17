import React from "react";
import axios from "axios";

export default class SelectedRouteContainer extends React.Component {
  componentDidMount() {
    console.log("this is props", this.props.match.params.voyage_id);
    const { voyage_id } = this.props.match.params;
    axios
      .get(`http://localhost:3000/api/`, {
        headers: {
          authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6InN1cGVydXNlciIsImlhdCI6MTU3MTMwNDUxMiwiZXhwIjoxNTcxMzQwNTEyfQ.e0SpiNoeKV-Oqymae0XjvEJ77Is0hLT6zl66y-OSdJY"
        }
      })
      .then(data => console.log(data));
  }

  render() {
    console.log(this.props.match);
    return <div>hello</div>;
  }
}
