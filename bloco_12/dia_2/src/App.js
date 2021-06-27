import { Component } from 'react';
import './App.css';
import Curriculum from './components/Curriculum';
import Form from './components/Form';

class App extends Component {
  constructor() {
    super();

    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.getChildState = this.getChildState.bind(this);
    this.hideDiv = this.hideDiv.bind(this);

    this.state ={
      form: {},
      curriculumClass: 'curriculum-no-display',
    };
  }

  onSubmitForm(e) {
    e.preventDefault();
    this.setState({
      curriculumClass: 'curriculum'
    })
  }

  hideDiv() {
    this.setState({
      curriculumClass: 'curriculum-no-display',
    })
  }

  getChildState(childState) {
    this.setState((prevState, _props) => ({
      form: {
        ...prevState.form,
        ...childState,
      },
    }))
  }

  render() {
    const { curriculumClass, form } = this.state;

    return (
      <div className="App">
        <h1>Formuário de cadastro de currículo</h1>
        <Curriculum curriculumClass={curriculumClass} formsInfo={form} />
        <Form onSubmitForm={this.onSubmitForm} hideDiv={this.hideDiv} getState={this.getChildState} />
      </div>
    );
  }
}

export default App;
