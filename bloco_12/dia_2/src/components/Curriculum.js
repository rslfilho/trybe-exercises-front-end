import { Component } from "react";
import '../style/Curriculum.css';
import CurriculumField from "./CurriculumField";

class Curriculum extends Component {
  render() {
    const { curriculumClass, formsInfo } = this.props;
    const { nome, email, cpf, adress, city, state, type, resume, office, officeDescription } = formsInfo;
    
    return (
      <div className={curriculumClass}>
        <fieldset>
          <legend>Dados Pessoais</legend>
          <CurriculumField curriculumLabel={'Nome:'} curriculumInfo={nome} />
          <CurriculumField curriculumLabel={'Email:'} curriculumInfo={email} />
          <CurriculumField curriculumLabel={'CPF:'} curriculumInfo={cpf} />
          <CurriculumField curriculumLabel={'Endereço:'} curriculumInfo={adress} />
          <CurriculumField curriculumLabel={'Cidade:'} curriculumInfo={city} />
          <CurriculumField curriculumLabel={'Estado:'} curriculumInfo={state} />
          <CurriculumField curriculumLabel={'Tipo:'} curriculumInfo={type} />
          <CurriculumField curriculumLabel={'Resumo do Currículo:'} curriculumInfo={resume} />
          <CurriculumField curriculumLabel={'Cargo:'} curriculumInfo={office} />
          <CurriculumField curriculumLabel={'Descrição do cargo:'} curriculumInfo={officeDescription} />
        </fieldset>
      </div>
    );
  }
}

Curriculum.defaultProps = {
  curriculumClass: 'curriculum-no-display'
}

export default Curriculum;