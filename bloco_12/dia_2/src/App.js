import { Component } from 'react';
import './App.css';
import Curriculum from './components/Curriculum';
import Form from './components/Form';

class App extends Component {
  constructor() {
    super();

    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.getChildState = this.getChildState.bind(this);

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

  getChildState(childState) {
    this.setState((prevState, _props) => ({
      form: {
        ...prevState.form,
        ...childState,
      },
    }))
  }

  render() {
    const { curriculumClass } = this.state;

    return (
      <div className="App">
        <h1>Formuário de cadastro de currículo</h1>
        <Curriculum curriculumClass={curriculumClass} />
        <Form onSubmitForm={this.onSubmitForm} getState={this.getChildState} />
      </div>
    );
  }
}

export default App;
