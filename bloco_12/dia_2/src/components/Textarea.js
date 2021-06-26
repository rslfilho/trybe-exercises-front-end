import { Component } from "react";

class Textarea extends Component {
  render() {
    const { textareaName, textareaLabel, textareaMaxlength, isRequired, onChangeTextarea, textareaValue } = this.props;

    return (
      <label>{textareaLabel}
        <textarea 
          name={textareaName} 
          maxLength={textareaMaxlength} 
          value={textareaValue}
          required={isRequired} 
          onChange={onChangeTextarea} 
        />
      </label>
    );
  }
}

Textarea.defaultProps = {
  isRequired: true,
}

export default Textarea;
