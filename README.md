🔑 Core Concepts
Store Setup

The store is created using configureStore from Redux Toolkit.

It combines all slices (in this case, the counterSlice) into a single source of truth for the app.

Counter Slice

Defined with createSlice, which bundles the state, reducers, and actions together.

Initial state: { value: 0 }.

Reducers include:

increment: increases the counter by 1

decrement: decreases the counter by 1

incrementByAmount: increases the counter by a custom number (payload)

reset: resets the counter back to 0

React Integration

The <Provider store={store}> wraps the app, making the Redux store available to all components.

Components use:

useSelector to read the current counter value from the store.

useDispatch to send actions (like increment or reset) to update the store.

UI Interaction

Buttons trigger actions via dispatch.

The displayed counter value updates automatically whenever the store changes.

Example actions:

+ → dispatches increment()

- → dispatches decrement()

Add Batch (+5) → dispatches incrementByAmount(5)

Reset Count → dispatches reset()
