import { configureStore } from '@reduxjs/toolkit'
// Add Slice reducer to the store
import counterReducer from '../features/counter/counterSlice'

export default configureStore({
  reducer: {
    counter : counterReducer,
  },
})

// This creates a Redux store, and also automatically configure the Redux DevTools extension so that you can inspect the store while developing.