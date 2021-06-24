import { Component } from "react";
import '../style/NextButton.css';

class NextButton extends Component {
  render() {
    return (
      <div className="next-button-container">
        <button className="next-button">Próximo Pokemon</button>
      </div>
    )
  }
}

export default NextButton;