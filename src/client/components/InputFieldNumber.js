import React, { Component } from "react";
import PropTypes from "prop-types";

import TextField from "@material-ui/core/TextField";
class InputFieldNumber extends Component {
  static defaultProps = {
    step: 0.01,
    placeholder: 0
  };

  render() {
    const { label, name, unit, value, onDataInputChange } = this.props;

    return (
      <form>
        <TextField
          label="Number"
          name={name}
          value={value}
          step={this.props.step}
          placeholder={this.props.placeholder}
          onChange={e => onDataInputChange(e)}
          type="number"
          InputLabelProps={{
            shrink: true
          }}
          margin="normal"
        />
        <span className="unit">{unit}</span>
      </form>
    );
  }
}

InputFieldNumber.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  unit: PropTypes.string,
  value: PropTypes.number,
  onDataInputChange: PropTypes.func
};
export default InputFieldNumber;
