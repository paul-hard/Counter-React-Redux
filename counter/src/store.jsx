import { configureStore, createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0

    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        reset: (state) => {
            state.value = 0
        },
        incrementBy: (state, action) => {
            state.value += Number.parseInt(action.payload)
        },
        decrementBy: (state, action) => {
            state.value -= Number.parseInt(action.payload)
        }
    }
})

const store = configureStore({
    reducer: counterSlice.reducer,
})

const { increment, decrement, reset, incrementBy, decrementBy } = counterSlice.actions;

export { store, increment, decrement, reset, incrementBy, decrementBy };