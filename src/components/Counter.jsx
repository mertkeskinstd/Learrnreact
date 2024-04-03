// Counter.js

import React from "react";

const Counter = ({ counter, setCounter, productPrice }) => {
    const incrementCounter = () => {
        setCounter((prevCounter) => prevCounter + 1);
    };

    const decrementCounter = () => {
        if (counter > 0) {
            setCounter((prevCounter) => prevCounter - 1);
        }
    };

    return (
        <div>
            <button onClick={incrementCounter}>+</button>
            {counter}
            <button onClick={decrementCounter}>-</button>
        </div>
    );
};

export default Counter;
