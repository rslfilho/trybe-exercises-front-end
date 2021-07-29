import {
  TOGGLE_SELECT,
  REFRESH_POSTS,
  REFRESH_POSTS_ERROR,
  REFRESH_POSTS_SUCCESS,
} from './actionTypes';

export const toggleSelect = () => ({ type: TOGGLE_SELECT });
const refreshPosts = () => ({ type: REFRESH_POSTS });
const refreshPostsSuccess = (payload) => ({ type: REFRESH_POSTS_SUCCESS, payload });
const refreshPostsError = (payload) => ({ type: REFRESH_POSTS_ERROR, payload });

export const fetchPosts = (subreddit) => async (dispatch) => {
  dispatch(refreshPosts());

  try {
    const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
    const result = await response.json();
    console.log(response);
    console.log(result.data.children);
    dispatch(refreshPostsSuccess(result.data.children));
  } catch (error) {
    dispatch(refreshPostsError(error));
  }
};
