import React, { Component } from "react";

class TitleAndDescribe extends Component {
  static defaultProps = {
    title: "Default Title",
    description: "Default Description"
  };

  render() {
    const { title, description } = this.props;
    return (
      <div>
        <h4>{title}</h4>
        <h4>{description}</h4>
      </div>
    );
  }
}
export default TitleAndDescribe;
