import React, { Component } from "react";
import PropTypes from "prop-types";

class Dropdown extends Component {
  render() {
    const { label, optionsMap, optionNameKey, handleSelection } = this.props;
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
}

Dropdown.propTypes = {
  label: PropTypes.string,
  optionNameKey: PropTypes.string,
  optionsMap: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ]),
  handleSelection: PropTypes.func
};

export default Dropdown;
