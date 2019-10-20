import React from "react";
import PropTypes from "prop-types";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

function CheckBox({ label, handleCheckbox }) {
  return (
    <div>
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Checked"
      />
    </div>
  );
}

Checkbox.propTypes = {
  label: PropTypes.string,
  handleCheckbox: PropTypes.func
};
export default CheckBox;
