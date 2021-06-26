import { Component } from "react";

class Button extends Component {
  render() {
    const { buttonType, buttonText } = this.props;
    
    return (
      <button
        type={buttonType}
      >
        {buttonText}
      </button>
    );
  }
}

Button.defaultProps = {
  type: 'button',
}

export default Button;
