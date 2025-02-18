import { useRef } from "react";

export default function Test() {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);

    const handleClick = (ref) => {
        ref.current.scrollIntoView({ behavior: "smooth" });
    }
    return (
        <div>
            <button onClick={() => handleClick(ref1)}>1번으로 가가</button>
            <button onClick={() => handleClick(ref2)}>2번으로 가가</button>
            <button onClick={() => handleClick(ref3)}>3번으로 가가</button>
            <div>
                <div id="container1"
                    style={{ width: 500, height: 500, background: "red" }}
                    ref={ref1}
                >
                    container1
                </div>
                <div id="container2"
                    style={{ width: 500, height: 500, background: "blue" }}
                    ref={ref2}
                >
                    container2
                </div>
                <div id="container3"
                    style={{ width: 500, height: 500, background: "green" }}
                    ref={ref3}
                >
                    container3
                </div>
            </div>
        </div >
    );
}