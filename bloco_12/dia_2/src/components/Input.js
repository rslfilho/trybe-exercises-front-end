import { Component } from "react";

class Input extends Component {
  render() {
    const { inputLabel, inputType, inputName, inputValue, onChangeInput, inputIsRequired, inputMaxlength } = this.props;

    return (
      <label>{inputLabel}
        <input 
          type={inputType}
          name={inputName}
          value={inputValue}
          onChange={onChangeInput}
          required={inputIsRequired}
          maxLength={inputMaxlength}
        />
      </label>
    )
  }
}

Input.defaultProps = {
  type: 'text',
  isRequired: true,
}

export default Input;