import { Component } from "react";

class Option extends Component {
  render() {
    const { optionValue } = this.props;
    
    return (
      <option>
        {optionValue}
      </option>
    )
  }
}

export default Option;