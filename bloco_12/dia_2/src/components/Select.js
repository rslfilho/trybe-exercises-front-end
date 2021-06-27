import { Component } from "react";
import states from '../data/states-data';
import Option from "./Option";

class StateSelect extends Component {
  render() {
    const { selectName, onChangeSelect } = this.props;

    return (
      <label>Estado:
      <select name={selectName} onChange={onChangeSelect}>
        {
          states
            .map((state) => Object.keys(state)[0])
            .map((state) => <Option key={state} optionValue={state} />)
        } 
      </select>
      </label>
    )
  }
}

export default StateSelect;