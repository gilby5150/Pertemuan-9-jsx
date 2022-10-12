import { configureStore } from '@reduxjs/toolkit'
import formReducer from '../reducer'
import { composeWithDevTools } from 'redux-devtools-extension'

export default configureStore({
  reducer: {
    form : formReducer,
  },
  composeWithDevTools
})

// This creates a Redux store, and also automatically configure the Redux DevTools extension so that you can inspect the store while developing.