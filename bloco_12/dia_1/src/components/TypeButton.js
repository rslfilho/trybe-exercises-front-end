import { Component } from "react";


class TypeButton extends Component {
  render() {
    const { type, onClick } = this.props;

    return (
      <button className="type-button" onClick={ onClick }>
        {
          type
        }
      </button>
    )
  }
}

export default TypeButton;