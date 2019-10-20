import React from "react";
import PropTypes from "prop-types";

function Dropdown({ label, optionsMap, optionNameKey, handleSelection }) {
  const options = optionsMap.map((option, index) => {
    return <option key={index}>{option[optionNameKey]}</option>;
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
  optionsMap: PropTypes.arrayOf(
    PropTypes.shape({
      lat: PropTypes.number,
      lng: PropTypes.number,
      name: PropTypes.string
    })
  ).isRequired,
  handleSelection: PropTypes.func
};

export default Dropdown;
