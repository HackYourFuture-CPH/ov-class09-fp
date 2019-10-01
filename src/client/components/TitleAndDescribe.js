import React, { Component } from "react";

class TitleAndDescribe extends Component {
  static defaultProps = {
    title: "Default Title",
    description: "Default Description"
  };

  render() {
    return (
      <div>
        <h4 style={titleStyle}>{this.props.title}</h4>
        <h4>{this.props.description}</h4>
      </div>
    );
  }
}

const titleStyle = {
  color: "#808080"
};

export default TitleAndDescribe;
