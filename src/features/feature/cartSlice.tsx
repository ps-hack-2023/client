import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartPrice: 0,
    cartItems: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, payload) => {
            
        }
    }
})

export const { addToCart } = cartSlice.actions

export default cartSlice.reducer