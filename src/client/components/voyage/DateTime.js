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
      <div>
        <label>{label}</label> <br />
        <label htmlFor="date"> Date </label>
        <input
          id="date"
          name={name}
          type="text"
          value={date}
          placeholder="yyyy-mm-dd"
          onChange={e => onDateInputChange(e)}
        />
        <label htmlFor="time"> Time </label>
        <input
          id="time"
          name={name}
          type="text"
          value={time}
          placeholder="hh:mm"
          onChange={e => onTimeInputChange(e)}
        />
      </div>
    );
  }
}
