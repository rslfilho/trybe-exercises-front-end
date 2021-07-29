import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class App extends React.Component {
  render() {
    const { subreddit } = this.props;

    return (
      <div>
        <h1>{`Selected: ${subreddit}`}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  subreddit: state.select.subreddit,
});

export default connect(mapStateToProps)(App);

App.propTypes = {
  subreddit: PropTypes.string.isRequired,
};
