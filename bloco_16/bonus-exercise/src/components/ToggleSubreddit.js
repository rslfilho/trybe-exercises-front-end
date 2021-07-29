import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleSelect, fetchPosts } from '../redux/actions';
import getTime from '../helpers/getTime';

class ToggleSubreddit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subreddit: 'reactjs',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    const { toggleSubreddit, fetchSubreddit } = this.props;
    const time = getTime();

    toggleSubreddit();
    fetchSubreddit(value, time);

    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { subreddit } = this.state;
    const { fetchSubreddit } = this.props;
    const time = getTime();

    fetchSubreddit(subreddit, time);
  }

  render() {
    const { subreddit } = this.state;

    return (
      <div>
        <select
          name="subreddit"
          value={ subreddit }
          onChange={ this.handleChange }
        >
          <option>reactjs</option>
          <option>frontend</option>
        </select>
        <button type="button" onClick={ this.handleClick }>Refresh</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  toggleSubreddit: () => dispatch(toggleSelect()),
  fetchSubreddit: (subreddit, time) => dispatch(fetchPosts(subreddit, time)),
});

export default connect(null, mapDispatchToProps)(ToggleSubreddit);

ToggleSubreddit.propTypes = {
  toggleSubreddit: PropTypes.func.isRequired,
  fetchSubreddit: PropTypes.func.isRequired,
};
