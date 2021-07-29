import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class SubredditPosts extends Component {
  render() {
    const { loading, data, error, refreshTime } = this.props;

    if (loading) {
      return (
        <p>Carregando...</p>
      );
    }

    if (!loading && data.length >= 1) {
      return (
        <div>
          <p>
            { `Last update at ${refreshTime}` }
          </p>
          <ul>
            {
              data.map((item, index) => (<li key={ index }>{item.data.title}</li>))
            }
          </ul>
        </div>
      );
    }

    if (!loading && error !== '') {
      return (
        <p>Algo de errado aconteceu, favor tentar novamente.</p>
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
  refreshTime: state.posts.refreshTime,
  error: state.posts.error,
});

export default connect(mapStateToProps)(SubredditPosts);

SubredditPosts.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  error: PropTypes.string.isRequired,
  refreshTime: PropTypes.string.isRequired,
};
