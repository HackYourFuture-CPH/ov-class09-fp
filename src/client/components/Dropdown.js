import React from "react";
import PropTypes from "prop-types";

function Dropdown({ label, optionsMap, optionNameKey, handleSelection }) {
  const options = optionsMap.map(option => {
    return <option>{option[optionNameKey]}</option>;
  });
  return (
    <label>
      {label}
      <select onChange={e => handleSelection(e)}>{options}</select>
    </label>
  );
}

Dropdown.propTypes = {
  label: PropTypes.string,
  optionNameKey: PropTypes.string.isRequired,
  optionsMap: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ]).isRequired,
  handleSelection: PropTypes.func
};

export default Dropdown;
