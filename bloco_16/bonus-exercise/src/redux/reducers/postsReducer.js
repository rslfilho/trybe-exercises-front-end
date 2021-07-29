import { REFRESH_POSTS, REFRESH_POSTS_SUCCESS } from '../actions/actionTypes';

const INITIAL_STATE = {
  loading: false,
  data: [],
};

const posts = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REFRESH_POSTS:
    return {
      ...state,
      loading: true,
    };
  case REFRESH_POSTS_SUCCESS:
    return {
      ...state,
      loading: false,
      data: action.payload,
    };
  default:
    return state;
  }
};

export default posts;
