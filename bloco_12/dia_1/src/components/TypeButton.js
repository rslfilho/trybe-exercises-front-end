import { Component } from "react";
import '../style/TypeButton.css';
import PropTypes from 'prop-types';


class TypeButton extends Component {
  render() {
    const { type, onClick } = this.props;

    return (
      <button className="type-button" onClick={ onClick }>
        { type }
      </button>
    )
  }
}

TypeButton.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default TypeButton;