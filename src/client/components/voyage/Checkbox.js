import React, { Component } from "react";

class Checkbox extends Component {
  render() {
    const { label, handleCheckbox } = this.props;
    return (
      <div>
        <label htmlFor="checkbox">{label}</label>
        <input type="checkbox" id="checkbox" onClick={e => handleCheckbox(e)} />
      </div>
    );
  }
}

export default Checkbox;
