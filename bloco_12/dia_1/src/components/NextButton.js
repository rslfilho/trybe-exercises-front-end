import { Component } from "react";
import '../style/NextButton.css';
import PropTypes from 'prop-types';

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

NextButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isDisable: PropTypes.bool.isRequired,
}

export default NextButton;