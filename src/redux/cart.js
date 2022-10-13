import { createSlice} from "@reduxjs/toolkit";

const INITIAL_STATE = {
    cartList: [],
    cartCount: 0,
}

const cartSlice = createSlice({
    name:"cart",
    initialState: INITIAL_STATE,
    reducers:{

        increment: (state) => {
            state.cartCount += 1;
            console.log(state);
        },
        decrement: (state) => {
            state.cartCount -= 1;
            
        }
    }


});
console.log(INITIAL_STATE.cartCount);
export const {increment, decrement, addToCart} = cartSlice.actions;

export default cartSlice.reducer;