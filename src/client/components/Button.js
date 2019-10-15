import React from "react";
import propTypes from "prop-types";

function Button({ label, handleClick, type }) {
  return (
    <button className={type} type="submit" onClick={handleClick}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: propTypes.string,
  handleClick: propTypes.func,
  type: propTypes.string
};

Button.defaultProps = {
  type: "primary"
};

export default Button;
