import React, {useState} from "react";
import "./index.css";

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="counter-container">
            <div className="count-display">{count}</div>
            <div className="count-controls">
                <button onClick={() => setCount(state => state + 1)} className="count-button">+</button>
                <button onClick={() => setCount(state => state - 1)} className="count-button">-</button>
            </div>
        </div>
    )
}

export default Counter;