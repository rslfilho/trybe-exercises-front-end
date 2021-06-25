import { Component } from "react";
import TypeButton from "./TypeButton";
import '../style/TypeButtons.css';
import PropTypes from 'prop-types';

class TypeButtons extends Component {
  render() {
    const { types, onClick } = this.props;

    return (
      <section className="type-buttons">
        {
          types.map((type) => <TypeButton key={type} type={type} onClick={() => onClick(type)} />)
        }
      </section>
    );
  }
}

TypeButtons.propTypes = {
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
}

export default TypeButtons;