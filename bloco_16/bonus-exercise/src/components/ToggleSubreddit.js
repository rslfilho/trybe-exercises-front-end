import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import toggleSelect from '../redux/actions/actionToggleSelect';

class ToggleSubreddit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subreddit: 'reactjs',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    const { toggleSubreddit } = this.props;

    console.log('trocou');
    toggleSubreddit();

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { subreddit } = this.state;

    return (
      <select
        name="subreddit"
        value={ subreddit }
        onChange={ this.handleChange }
      >
        <option>reactjs</option>
        <option>frontend</option>
      </select>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  toggleSubreddit: () => dispatch(toggleSelect()),
});

export default connect(null, mapDispatchToProps)(ToggleSubreddit);

ToggleSubreddit.propTypes = {
  toggleSubreddit: PropTypes.func.isRequired,
};
