import { Component } from "react";


class TypeButton extends Component {
  render() {
    const { type } = this.props;

    return (
      <button className="type-button">
        {
          type
        }
      </button>
    )
  }
}

export default TypeButton;