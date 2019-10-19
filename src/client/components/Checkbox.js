import React from "react";
import PropTypes from "prop-types";
import Checkbox from "@material-ui/core/Checkbox";

function CheckBox({ label, handleCheckbox }) {
  return (
    <div>
      <Checkbox
        defaultChecked
        color="default"
        value="checked"
        inputProps={{
          "aria-label": "checkbox with default color"
        }}
      />
    </div>
  );
}

Checkbox.propTypes = {
  label: PropTypes.string,
  handleCheckbox: PropTypes.func
};
export default CheckBox;
