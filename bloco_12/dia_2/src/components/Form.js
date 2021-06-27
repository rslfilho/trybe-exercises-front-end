import { Component } from "react";
import ButtonsContainer from "./ButtonsContainer";
import JobInfo from "./JobInfo";
import PersonalData from "./PersonalData";

class Form extends Component {
  constructor() {
    super();

    this.getChildState = this.getChildState.bind(this);

    this.state = {};
  }

  getChildState(childState) {
    const { getState } = this.props;

    this.setState((prevState, _props) => ({
      ...prevState,
      ...childState,
    }), () => getState(this.state))
  }

  render() {
    const { onSubmitForm } = this.props;

    return (
      <form onSubmit={onSubmitForm}>
        <PersonalData getState={this.getChildState} />
        <JobInfo getState={this.getChildState} />
        <ButtonsContainer />
      </form>
    );
  }
}

export default Form;
