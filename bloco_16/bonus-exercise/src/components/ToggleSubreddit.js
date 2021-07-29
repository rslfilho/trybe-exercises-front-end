import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleSelect, fetchPosts } from '../redux/actions';

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
    const { toggleSubreddit, fetchSubreddit } = this.props;

    toggleSubreddit();
    fetchSubreddit(value);

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
  fetchSubreddit: (subreddit) => dispatch(fetchPosts(subreddit)),
});

export default connect(null, mapDispatchToProps)(ToggleSubreddit);

ToggleSubreddit.propTypes = {
  toggleSubreddit: PropTypes.func.isRequired,
  fetchSubreddit: PropTypes.func.isRequired,
};
