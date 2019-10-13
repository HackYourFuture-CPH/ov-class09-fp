import React, { Component } from "react";
import PropTypes from "prop-types";

class NavButton extends Component {
  render() {
    const { label, handleClick } = this.props;
    return (
      <button type="submit" onClick={handleClick}>
        {label}
      </button>
    );
  }
}

NavButton.PropTypes = {
  label: PropTypes.string,
  handleClick: PropTypes.func
};

export default NavButton;
