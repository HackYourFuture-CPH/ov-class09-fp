import React, { Component } from "react";

class InputField extends Component {
  render() {
    const {
      label,
      name,
      min,
      max,
      step,
      unit,
      value,
      onDataInputChange
    } = this.props;
    return (
      <label>
        {label}
        <input
          type="number"
          name={name}
          min={min}
          max={max}
          step={step}
          value={value}
          placeholder={`${min} ${unit}`}
          onChange={e => onDataInputChange(e)}
        />
      </label>
    );
  }
}
export default InputField;
