import React, { Component } from "react";

class Title extends Component {
  render() {
    const { title } = this.props;
    return (
      <div>
        <h3>{title}</h3>
      </div>
    );
  }
}
export default Title;
