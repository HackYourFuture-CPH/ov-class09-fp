import React, { Component } from "react";

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

export default Dropdown;
