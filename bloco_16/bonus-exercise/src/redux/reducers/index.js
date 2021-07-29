import { combineReducers } from 'redux';
import select from './selectReducer';
import posts from './postsReducer';

const rootReducer = combineReducers({ select, posts });

export default rootReducer;
