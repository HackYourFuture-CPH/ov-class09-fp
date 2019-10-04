import React, { Component } from "react";

export default class DateTime extends Component {
  render() {
    const {
      label,
      name,
      date,
      time,
      onDateInputChange,
      onTimeInputChange
    } = this.props;
    return (
      <React.Fragment>
        <label>{label} </label>
        <label>
          Date
          <input
            name={name}
            type="text"
            value={date}
            placeholder="yyyy-mm-dd"
            onChange={e => onDateInputChange(e)}
          />
        </label>
        <label>
          Time
          <input
            name={name}
            type="text"
            value={time}
            placeholder="hh:mm"
            onChange={e => onTimeInputChange(e)}
          />
        </label>
      </React.Fragment>
    );
  }
}
