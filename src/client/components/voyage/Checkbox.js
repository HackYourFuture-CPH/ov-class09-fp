import React, { Component } from "react";
import PropTypes from "prop-types";

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
Checkbox.PropTypes = {
  label: PropTypes.string,
  handleCheckbox: PropTypes.func
};
export default Checkbox;
