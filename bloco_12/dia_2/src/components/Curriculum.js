import { Component } from "react";
import '../style/Curriculum.css';

class Curriculum extends Component {
  render() {
    const { curriculumClass } = this.props;

    return (
      <div className={curriculumClass}>
        Curriculum
      </div>
    );
  }
}

Curriculum.defaultProps = {
  curriculumClass: 'curriculum-no-display'
}

export default Curriculum;