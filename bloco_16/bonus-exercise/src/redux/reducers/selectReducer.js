import { TOGGLE_SELECT } from '../actions/actionTypes';

const INITIAL_STATE = {
  subreddit: 'reactjs',
};

const select = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case TOGGLE_SELECT:
    console.log('reducer');
    return { subreddit: state.subreddit === 'reactjs' ? 'frontend' : 'reactjs' };
  default:
    return state;
  }
};

export default select;
