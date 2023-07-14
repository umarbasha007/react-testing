import { useState } from "react";


function Counter ({ initialCount }) {

    const [count, setCount] = useState(initialCount);

    const increment = () => {
        setCount((prev) => prev + 1 )
    }

    const decrement = () => {
        setCount((prev) => prev - 1 )
    }

    return (
        <>
        <h1>
            Count : <h3 data-testid="count">{count}</h3>
        </h1>
        <div>
            <button onClick={increment}> + </button>
            <button onClick={decrement}> - </button>
        </div>
        
        </>
    );
}

export default Counter;