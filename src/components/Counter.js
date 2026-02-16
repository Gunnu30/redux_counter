// Import hooks from react-redux.
// useSelector: lets you read values from the Redux store.
// useDispatch: lets you send actions to update the store.
import { useSelector, useDispatch } from 'react-redux';

// Import action creators from your counter slice.
// Each of these corresponds to a reducer function in counterSlicer.js.
import { increment, decrement, incrementByAmount, reset } from '../ReactReduix/counterSlicer';

// Define a reusable button style object for consistent UI.
const buttonStyle = {
    padding: '10px 25px',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#5ec63e',
    color: 'white',
    transition: 'transform 0.1s',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
};

// Counter component: connects UI with Redux store.
const Counter = () => {
    // useSelector reads the current value of 'counter' from the store.
    // state.counter.value comes from the counterSlice initial state.
    const count = useSelector(state => state.counter.value);

    // useDispatch gives access to the dispatch function.
    // Dispatch is how you trigger actions that update the store.
    const dispatch = useDispatch();

    return (
        <div style={{
            backgroundColor: '#5ec63e', // Full-screen green background
            height: '100vh',
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: 'Arial, sans-serif',
            margin: 0,
            padding: 0,
            overflow: 'hidden' // Prevents scrollbars
        }}>
            {/* White card container for the counter UI */}
            <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)', // Transparent white card
                padding: '40px',
                borderRadius: '20px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                textAlign: 'center',
                minWidth: '320px'
            }}>
                {/* Title */}
                <h1 style={{ color: '#333', marginBottom: '10px' }}>Counter</h1>
                
                {/* Display the current count value from Redux store */}
                <div style={{ fontSize: '4rem', fontWeight: 'bold', color: '#5ec63e', margin: '20px 0' }}>
                    {count}
                </div>

                {/* Increment and decrement buttons */}
                <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginBottom: '15px' }}>
                    {/* Dispatches decrement action */}
                    <button style={buttonStyle} onClick={() => dispatch(decrement())}>-</button>
                    {/* Dispatches increment action */}
                    <button style={buttonStyle} onClick={() => dispatch(increment())}>+</button>
                </div>

                {/* Add batch (+5) button: dispatches incrementByAmount with payload 5 */}
                <button 
                    style={{...buttonStyle, width: '100%', backgroundColor: '#333', marginBottom: '10px'}} 
                    onClick={() => dispatch(incrementByAmount(5))}
                >
                    Add Batch (+5)
                </button>

                {/* Reset button: dispatches reset action to set count back to initial value */}
                <button 
                    style={{
                        ...buttonStyle, 
                        width: '100%', 
                        backgroundColor: '#ff4d4d', 
                        fontSize: '0.9rem'
                    }} 
                    onClick={() => dispatch(reset())}
                >
                    Reset Count
                </button>
            </div>
        </div>
    );
}

// Export the Counter component so it can be used in App.js.
export default Counter;
