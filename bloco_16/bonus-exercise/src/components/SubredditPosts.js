import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class SubredditPosts extends Component {
  render() {
    const { loading, data } = this.props;

    if (loading) {
      return (
        <p>Carregando...</p>
      );
    }

    if (!loading && data.length >= 1) {
      return (
        <ul>
          {
            data.map((item, index) => (<li key={ index }>{item.data.title}</li>))
          }
        </ul>
      );
    }

    return (
      <p>Select one Subreddit!</p>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.posts.loading,
  data: state.posts.data,
});

export default connect(mapStateToProps)(SubredditPosts);

SubredditPosts.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
