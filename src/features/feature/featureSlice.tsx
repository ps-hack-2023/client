import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  message: 'Hello World :)',
  isLoading: true
}

const featureSlice = createSlice({
  name: 'feature',
  initialState,
  reducers: {
    logMessage: (state, payload) => {
      console.log(state.message + ' AAA ' + payload.payload)
      state.message = 'New message'
    }
  }
})

export const { logMessage } = featureSlice.actions

export default featureSlice.reducer
