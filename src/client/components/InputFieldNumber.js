import React, { Component } from "react";
import PropTypes from "prop-types";

class InputFieldNumber extends Component {
  static defaultProps = {
    step: 0.01,
    placeholder: 0
  };

  render() {
    const { label, name, unit, value, onDataInputChange } = this.props;
    return (
      <label>
        {label}
        <input
          type="number"
          name={name}
          value={value}
          step={this.props.step}
          placeholder={this.props.placeholder}
          onChange={e => onDataInputChange(e)}
        />
        <span className="unit">{unit}</span>
      </label>
    );
  }
}

InputFieldNumber.PropTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  unit: PropTypes.string,
  step: PropTypes.number,
  value: PropTypes.number,
  onDataInputChange: PropTypes.func
};
export default InputFieldNumber;
