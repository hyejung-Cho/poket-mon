import { useState } from "react";

export function ArrayTest() {
    const [array, setArray] = useState([]);

    const handleAddClick = () => {
        array.push('Items : ' + array.length);
        console.log(array);
        //setArray(array);   // 화면에서 array 참조 변수라 해당 변경된 내용이 적용되지 않음
        setArray([...array]); // 이전에 있던 배열을 복사해서 값을 가짐
    };

    const handleRemoveClick = (index) => {
        // array.splice(index, 1);
        // console.log(array)
        // setArray([...array]); //현재 array 상태 복사해서 넣어줌
        setArray(array.filter((item, idx) => idx !== index));
    }

    return <div>
        <button onClick={handleAddClick}>추가</button>
        <ul>
            {
                array.map((item, index) => {
                    return (
                        <li key={index}>
                            {item}
                            <button onClick={() => handleRemoveClick(index)}>제거</button>
                        </li>
                    );
                })
            }
        </ul>
    </div >
}