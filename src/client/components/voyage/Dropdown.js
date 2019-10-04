import React, { Component } from "react";

class Dropdown extends Component {
  render() {
    const { label, optionsMap, handleSelection } = this.props;
    const options = optionsMap.map(option => {
      return <option>{option.name}</option>;
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
