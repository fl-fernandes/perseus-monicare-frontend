'use strict';

import { configureStore } from '@reduxjs/toolkit';

import userReducer from 'redux/reducers/user';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;