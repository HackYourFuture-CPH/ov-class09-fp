import React, { Component } from "react";

class InputField extends Component {
  render() {
    const { label, name, step, unit, value, onDataInputChange } = this.props;
    return (
      <label>
        {label}
        <input
          type="number"
          name={name}
          step={step}
          value={value}
          placeholder={`0 ${unit}`}
          onChange={e => onDataInputChange(e)}
        />
      </label>
    );
  }
}

export default InputField;
