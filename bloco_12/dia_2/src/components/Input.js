import { Component } from "react";

class Input extends Component {
  render() {
    const { inputLabel, inputType, inputName, onChangeInput, isRequiredInput } = this.props;

    return (
      <label>{inputLabel}
        <input 
          type={inputType}
          name={inputName}
          onChange={onChangeInput}
          isRequired={isRequiredInput}
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