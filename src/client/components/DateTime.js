import React from "react";
import PropTypes from "prop-types";

function DateTime({
  label,
  name,
  date,
  time,
  onDateInputChange,
  onTimeInputChange
}) {
  return (
    <React.Fragment>
      <label>{label}</label>
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

DateTime.PropTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  time: PropTypes.string,
  date: PropTypes.string,
  value: PropTypes.number,
  onDateInputChange: PropTypes.func,
  onTimeInputChange: PropTypes.func
};
export default DateTime;
