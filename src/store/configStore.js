import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import themeReducer from '../reducers/themeReducer';

const reducer = {
  theme: themeReducer
};

export default configureStore({
  reducer,
  middleware: [thunk]
});
