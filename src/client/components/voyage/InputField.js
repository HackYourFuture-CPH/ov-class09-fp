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
      // accuracy,
      onDataInputChange
    } = this.props;
    return (
      <div>
        <label htmlFor="data-input-field">{label}</label>
        <input
          style={{ width: 100 }}
          id="data-input-field"
          type="number"
          name={name}
          step={step}
          min={min}
          max={max}
          //accuracy={accuracy}
          step={step}
          placeholder={`${min} ${unit}`}
          value={value}
          onChange={e => onDataInputChange(e)}
        />
      </div>
    );
  }
}
export default InputField;
