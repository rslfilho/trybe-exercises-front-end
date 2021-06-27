import { Component } from "react";

class CurriculumField extends Component {
  render() {
    const { curriculumInfo, curriculumLabel } = this.props;

    return (
      <div>
        <span>{curriculumLabel} </span><span>{curriculumInfo}</span>
      </div>
    );
  }
}

export default CurriculumField;