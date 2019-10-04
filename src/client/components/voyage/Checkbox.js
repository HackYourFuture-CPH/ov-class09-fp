import React, { Component } from "react";

class Checkbox extends Component {
  render() {
    const { label, handleCheckbox } = this.props;
    return (
      <label>
        {label}
        <input type="checkbox" onClick={e => handleCheckbox(e)} />
      </label>
    );
  }
}
export default Checkbox;
