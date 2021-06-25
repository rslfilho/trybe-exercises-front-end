import { Component } from "react";
import '../style/NextButton.css';

class NextButton extends Component {
  render() {
    const { onClick, isDisable } = this.props;

    return (
      <div className="next-button-container">
        <button onClick={onClick} className="next-button" disabled={isDisable}>Próximo Pokemon</button>
      </div>
    )
  }
}

export default NextButton;