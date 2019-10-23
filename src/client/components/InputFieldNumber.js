import React, { Component, Fragment } from "react";
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
      <Fragment>
        <TextField
          label={label}
          name={name}
          value={value}
          step={this.props.step}
          placeholder={this.props.placeholder}
          onChange={e => onDataInputChange(e)}
          type="number"
          InputLabelProps={{
            shrink: true
          }}
        />
        <span className="unit">{unit}</span>
      </Fragment>
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
