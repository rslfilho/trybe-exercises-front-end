import { Component } from "react";
import '../style/TypeButton.css';

class TypeButton extends Component {
  render() {
    const { type, onClick } = this.props;

    return (
      <button className="type-button" onClick={ onClick }>
        { type }
      </button>
    )
  }
}

export default TypeButton;