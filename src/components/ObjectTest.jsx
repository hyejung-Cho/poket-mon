import { useState } from 'react';

export function ObjectTest() {
    const [user, setUser] = useState({
        name: "",
        age: 0,
    })

    const handleNameChange = (e) => {
        console.log(e.target.value);

        // user.name = e.target.value;
        // setUser(user); // 화면에 변경사항 적용되지 않음
        // setUser((prev) => {
        //     return { ...prev, name: e.target.value };
        // });

        setUser({ ...user, name: e.target.value });
    }

    const handleAgeChange = (e) => {
        setUser({ ...user, age: e.target.value });
    }


    return (
        <div>
            <input placeholder="name" onChange={handleNameChange} />
            <input placeholder="age" onChange={handleAgeChange} />

            <div>
                name:{user.name} <br />
                age:{user.age}
            </div>

        </div>
    )
}