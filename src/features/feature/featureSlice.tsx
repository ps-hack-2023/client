import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  message: 'Hello World :)',
  isLoading: true
}

const featureSlice = createSlice({
  name: 'feature',
  initialState,
  reducers: {
    log (state) {
      console.log(state.message)
    }
  }
})

export default featureSlice.reducer
