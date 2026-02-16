// Import the configureStore function from Redux Toolkit.

import { configureStore } from "@reduxjs/toolkit";

// Import your slice reducers.
// Each slice manages a specific part of the app's state (e.g., counter, todos).
import counterReducer from "./ReactReduix/counterSlicer";
// Create the store using configureStore.
// Think of the store as the "central brain" of your app that holds all state.
export const store = configureStore({
  // Each key here represents a piece of state in your app.
  reducer: {
    counter: counterReducer, // 'counter' state will be managed by counterSlice
  },
  // You can customize it here if needed.
});

// Export the store so it can be provided to your React app.
