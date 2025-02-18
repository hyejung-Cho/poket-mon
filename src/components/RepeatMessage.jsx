import { useEffect } from "react";

export function RepeatMessage({ message }) {
    useEffect(() => {
        const id = setInterval(() => {
            console.log(message);
        }, 2000);

        return () => {
            console.log("clean up");
            clearInterval(id);
        };
    }, [message]);

    return <div>I'm logging to console {message}</div>
}