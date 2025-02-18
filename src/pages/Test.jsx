import { useState, useEffect } from "react";

export default function Test() {
    const [data, setData] = useState(null);
    const [no, setNo] = useState(1);

    const handleClick = (num) => {
        setNo(num);
    }

    const fetchData = async (no) => {
        const answer = await fetch("https://dog.ceo/api/breeds/image/random/" + no);
        const json = await answer.json();
        setData(json);

        console.log(">>> data " + data);
    }

    useEffect(() => {
        fetchData(no);
    }, [no]);  // 넘버가 바뀔 때마다 호출

    return (
        <div>
            <button onClick={() => handleClick(1)}>1</button>
            <button onClick={() => handleClick(2)}>2</button>
            <button onClick={() => handleClick(3)}>3</button>
            <button onClick={() => handleClick(4)}>4</button>
            <button onClick={() => handleClick(5)}>5</button>
            <div>
                {
                    data && data.message.map(item => {
                        return <img key={item} src={item} style={{ width: 200, height: 200 }} />
                    })
                }
            </div>

        </div>

    );

}