import React from "react";
import PropTypes from "prop-types";

function NavButton({ label, handleClick }) {
  return (
    <button type="submit" onClick={handleClick}>
      {label}
    </button>
  );
}

NavButton.PropTypes = {
  label: PropTypes.string,
  handleClick: PropTypes.func
};

export default NavButton;
