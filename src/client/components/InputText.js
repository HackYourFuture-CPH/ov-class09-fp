import React, { Component } from "react";
import PropTypes from "prop-types";

import TextField from "@material-ui/core/TextField";
class InputText extends Component {
  static defaultProps = {
    step: 0.01,
    placeholder: 0
  };

  render() {
    const { label, email, value, onDataInputTextChange } = this.props;

    return (
      <form>
        <TextField
          required
          id="standard-name"
          label="Email"
          value={email}
          onChange={e => onDataInputTextChange(e)}
          margin="normal"
          type="email"
          name="email"
          autoComplete="email"
          variant="filled"
        />
      </form>
    );
  }
}

InputText.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  unit: PropTypes.string,
  value: PropTypes.number,
  onDataInputChange: PropTypes.func
};
export default InputText;
