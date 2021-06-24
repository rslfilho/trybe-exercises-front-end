import { Component } from "react";
import '../style/NextButton.css';

class NextButton extends Component {
  render() {
    const { onClick } = this.props;

    return (
      <div className="next-button-container">
        <button onClick={onClick} className="next-button">Próximo Pokemon</button>
      </div>
    )
  }
}

export default NextButton;