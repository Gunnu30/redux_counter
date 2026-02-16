// Import createSlice from Redux Toolkit.
// createSlice simplifies creating reducers + actions together in one place.
import { createSlice } from '@reduxjs/toolkit';

// Define a slice of state called "counter".
// A slice bundles: name, initial state, and reducer logic.
const counterSlice = createSlice({
    // Name of the slice (used internally by Redux).
    name: "Counter",

    // Initial state for this slice.
    // Here, we start with a single property 'value' set to 0.
    initialState: { value: 0 },

    // Reducers: functions that define how the state changes
    // in response to specific actions.
    reducers: {
        // Increment: increases the counter by 1.
        increment: (state) => { state.value += 1 },

        // Decrement: decreases the counter by 1.
        decrement: (state) => { state.value -= 1 },

        // IncrementByAmount: increases the counter by a custom number.
        // 'action.payload' carries the value passed when dispatching.
        incrementByAmount: (state, action) => { state.value += action.payload },

        // Reset: sets the counter back to 0.
        reset: (state) => { state.value = 0 }
    }
});

// Export the generated action creators.
// These functions (increment, decrement, etc.) can be dispatched in components.
export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions;

// Export the reducer function.
// This will be combined into the Redux store so the slice can manage its state.
export default counterSlice.reducer;
