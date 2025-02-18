import { useState } from "react";

export function TextField() {
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    }

    return (
        <div>
            <input placeholder="input" onChange={handleChange} />
            <p>{text}</p>
        </div>
    );

}

