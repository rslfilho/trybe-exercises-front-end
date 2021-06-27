import { Component } from "react";

class Button extends Component {
  render() {
    const { buttonType, buttonText, onClickButton } = this.props;
    
    return (
      <button type={buttonType} onClick={onClickButton} >
        {buttonText}
      </button>
    );
  }
}

Button.defaultProps = {
  type: 'button',
}

export default Button;
