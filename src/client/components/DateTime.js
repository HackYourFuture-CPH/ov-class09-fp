import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
/* <label>
        Date
        <input
          name={name}
          type="text"
          value={date}
          placeholder="yyyy-mm-dd"
          onChange={e => onDateInputChange(e)}
        />
      </label> */
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
      <form>
        <TextField
          id="date"
          label="Date"
          type="date"
          defaultValue="2019-10-19"
          InputLabelProps={{
            shrink: true
          }}
        />

        <TextField
          id="time"
          label="Time"
          type="time"
          defaultValue="04:20"
          InputLabelProps={{
            shrink: true
          }}
          inputProps={{
            step: 300 // 5 min
          }}
        />
      </form>
    </React.Fragment>
  );
}

DateTime.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  time: PropTypes.string,
  date: PropTypes.string,
  value: PropTypes.number,
  onDateInputChange: PropTypes.func,
  onTimeInputChange: PropTypes.func
};
export default DateTime;
