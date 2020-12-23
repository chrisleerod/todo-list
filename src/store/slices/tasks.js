import { createSlice, createSelector, nanoid } from '@reduxjs/toolkit';

const initialState = {
  byId: {},
  allIds: []
}

export const tasks = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    add: (state, action) => {
      const { payload } = action;
      if (!payload) {
        return;
      } 

      const { id, title, description, ...rest } = payload;

      // incoming "new" task
      if (!id) {
        
        let _id;
        do {
          _id = nanoid(16);
        } while(state.byId[_id]);

        state.byId[_id] = {
          id: _id,
          completed: false,
          title,
          description,
          ...rest
        }

        return;
      } 

      // otherwise, treat it as an edit
      state.byId[id] = {
        ...state.byId[id],
        title,
        description,
        ...rest
      }

    },
    remove: (state, action) => {
      const { payload } = action;
      if (!payload) {
        return;
      } 

      state.allIds.filter(id => id !== payload);
      delete state.byId[payload];
    },
  }
});

export const selectTasks = (state) => Object.values(state.Tasks.byId);

export const makeTasks = createSelector(selectTasks, (state) => state);

const { actions, reducer } = tasks;
export const { add, remove } = actions;

export default reducer;