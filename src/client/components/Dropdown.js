import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";

function Dropdown({ label, optionsMap, optionNameKey, handleSelection }) {
  return (
    <form>
      <TextField
        id="standard-select-currency"
        select
        label="Select"
        onChange={e => handleSelection(e)}
        helperText="Please select your Location"
        margin="normal"
      >
        {optionsMap.map((option, index) => {
          <option key={index}>{option[optionNameKey]}</option>;
        })}
      </TextField>
    </form>
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

/*const options = optionsMap.map((option, index) => {
    return <option key={index}>{option[optionNameKey]}</option>;
  } 
  <label>
  {label}
  <select onChange={e => handleSelection(e)}>{options}</select>
</label>

*/
