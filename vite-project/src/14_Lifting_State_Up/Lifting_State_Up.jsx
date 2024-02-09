import React, { useState } from 'react';

export function Parent() {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <h1>Count: {count}</h1>
            <Child onIncrement={handleIncrement} />
        </div>
    );
}

export function Child(props) {
    const { onIncrement } = props;
    return (
        <div>
            <button onClick={onIncrement}>Increment</button>
        </div>
    );
}