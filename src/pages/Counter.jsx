import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }

    console.log(count);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleClick}>+ 1 더하기 </button>
        </div>
    );
}