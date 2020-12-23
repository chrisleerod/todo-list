import { combineReducers } from '@reduxjs/toolkit';

import Tasks from './slices/tasks';

const combinedReducer = combineReducers({
  Tasks
});

const rootReducer = (state, action) => {
  return combinedReducer(state, action);
};

export default rootReducer;
