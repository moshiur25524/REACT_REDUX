import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCount, incrementCount, resetCount } from '../../Services/Actions/CounterAction';

const Counter = () => {

    const count = useSelector(state => state.count)
    const dispatch = useDispatch()
    const handleIncrese = () => {
        dispatch(incrementCount())
    }
    const handleReset = () => {
        dispatch(resetCount())
    }
    const handleDecrease = () => {
        dispatch(decrementCount())
    }
    return (
        <div>
            <p>Counter: {count}</p>
            <button onClick={handleIncrese}>Increase Number</button>
            <button onClick={handleReset}>RESET Number</button>
            <button onClick={handleDecrease}>Decrease Number</button>
        </div>
    );
};

/*
 1. Declare a state: {count: 0}
 2. action {increase , decrease, reset}
 3. reducer INCREASE: count => count + 1
            DECREASE: count => count - 1
            RESET: count => count = 0
4. Create a store
5. provide the store in the root with provider
6. To access in any state we will use useSelector from react-redux
7. import dispatch and call from the react-redux
8. dispatch the action indivitually.
*/

export default Counter;