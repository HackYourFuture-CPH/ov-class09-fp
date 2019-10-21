import React, { Component } from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";

function InputEmail({ label, email, value, onDataInputTextChange }) {
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
      />
    </form>
  );
}

InputEmail.propTypes = {
  label: PropTypes.string,
  email: PropTypes.string,
  value: PropTypes.string,
  onDataInputTextChange: PropTypes.func
};
export default InputEmail;
