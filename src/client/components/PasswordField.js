import React, { Component } from "react";
import PropTypes from "prop-types";

import TextField from "@material-ui/core/TextField";
class PasswordField extends Component {
  static defaultProps = {
    password: ""
  };

  render() {
    const { label, password, value, onDataInputChange } = this.props;

    return (
      <form>
        <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="filled"
        />
      </form>
    );
  }
}

PasswordField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  unit: PropTypes.string,
  value: PropTypes.number,
  onDataInputChange: PropTypes.func
};
export default PasswordField;
