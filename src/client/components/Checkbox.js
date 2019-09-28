import React, { Component } from "react";

class Checkbox extends Component {
  render() {
    const { label } = this.props;
    return (
      <div>
        <label htmlFor="checkbox">{label}</label>
        <input type="checkbox" id="checkbox" />
      </div>
    );
  }
}

export default Checkbox;
