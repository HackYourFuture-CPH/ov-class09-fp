import React, { Component } from "react";

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

export default NavButton;
