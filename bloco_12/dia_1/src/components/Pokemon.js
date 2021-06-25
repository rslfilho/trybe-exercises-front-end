import { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/Pokemon.css';

class Pokemon extends Component {
  render(){
    const { name, type, averageWeight, image } = this.props.pokemon;

    return (
      <div className='pokemon-div'>
        <div className='pokemon-info'>
          <p>{name}</p>
          <p>{type}</p>
          <p>Average weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
        </div>
        <div className='pokemon-img-div'>
          <img src={image} alt={name} className='pokemon-img' />
        </div>
      </div>
    );
  };
};

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  averageWeight: PropTypes.shape({
    value: PropTypes.number,
    measurementUnit: PropTypes.string,
  }).isRequired,
  image: PropTypes.string.isRequired,
};

export default Pokemon;