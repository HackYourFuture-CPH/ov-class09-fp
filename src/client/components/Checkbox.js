import React from "react";
import PropTypes from "prop-types";

function Checkbox({ label, handleCheckbox }) {
  return (
    <label>
      {label}
      <input type="checkbox" onClick={e => handleCheckbox(e)} />
    </label>
  );
}

Checkbox.propTypes = {
  label: PropTypes.string,
  handleCheckbox: PropTypes.func
};
export default Checkbox;
