import React, { Component } from "react";

class Dropdown extends Component {
  render() {
    const { label, portsMap } = this.props;
    const options = portsMap.map(port => {
      return <option>{port.name}</option>;
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
