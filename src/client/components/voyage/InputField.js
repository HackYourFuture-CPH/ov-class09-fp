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
      <div>
        <label htmlFor="number-input-field">{label}</label>
        <input
          id="number-input-field"
          type="number"
          name={name}
          min={min}
          max={max}
          step={step}
          value={value}
          placeholder={`${min} ${unit}`}
          onChange={e => onDataInputChange(e)}
        />
      </div>
    );
  }
}
export default InputField;
