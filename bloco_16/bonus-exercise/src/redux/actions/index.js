import {
  TOGGLE_SELECT,
  REFRESH_POSTS,
  REFRESH_POSTS_ERROR,
  REFRESH_POSTS_SUCCESS,
} from './actionTypes';

export const toggleSelect = () => ({ type: TOGGLE_SELECT });
const refreshPosts = () => ({ type: REFRESH_POSTS });
const refreshPostsSuccess = (payload, time) => ({
  type: REFRESH_POSTS_SUCCESS,
  payload,
  time,
});

const refreshPostsError = (payload) => ({ type: REFRESH_POSTS_ERROR, payload });

export const fetchPosts = (subreddit, time) => async (dispatch) => {
  dispatch(refreshPosts());

  try {
    const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
    const result = await response.json();
    dispatch(refreshPostsSuccess(result.data.children, time));
  } catch (error) {
    dispatch(refreshPostsError(error));
  }
};
