import React, { Component } from "react";

class Dropdown extends Component {
  render() {
    const { label, optionsMap } = this.props;
    const options = optionsMap.map(option => {
      return <option>{option.name}</option>;
    });
    return (
      <div>
        <label htmlFor="dropdown">{label}</label>
        <select id="dropdown">{options}</select>
      </div>
    );
  }
}

export default Dropdown;
