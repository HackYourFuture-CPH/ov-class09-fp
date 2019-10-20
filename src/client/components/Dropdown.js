import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

function Dropdown({ label, optionsMap, optionNameKey, handleSelection }) {
  return (
    <form>
      <FormControl>
        <InputLabel htmlFor="age-simple">Select</InputLabel>
        <Select value={label} onChange={e => handleSelection(e)}>
          {optionsMap.map(elem => {
            return <MenuItem value={elem.value}>{elem.name}</MenuItem>;
          })}
        </Select>
        <FormHelperText>Some place from here</FormHelperText>
      </FormControl>
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
