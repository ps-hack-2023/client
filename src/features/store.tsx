import { configureStore } from '@reduxjs/toolkit'
import featureReducer from './feature/featureSlice'

export const store = configureStore({
  reducer: {
    feature: featureReducer
  }
})
