import React, { Component } from "react";

class Dropdown extends Component {
  render() {
    const { label, optionsMap, handleSelection } = this.props;
    const options = optionsMap.map(option => {
      return <option>{option.name}</option>;
    });
    return (
      <div>
        <label htmlFor="dropdown">{label}</label>
        <select id="dropdown" onChange={e => handleSelection(e)}>
          {options}
        </select>
      </div>
    );
  }
}

export default Dropdown;
