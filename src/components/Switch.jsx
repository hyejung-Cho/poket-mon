import { useEffect, useState } from 'react';

export default function Switch() {
    const [theme, setTheme] = useState('light'); // 로컬 스토리지에서 테마 가져오기
    const handleClick = () => {
        if (theme === 'light') {
            setTheme('dark');
            window.localStorage.setItem('theme', 'dark');
        } else {
            setTheme('light');
            window.localStorage.setItem('theme', 'light');
        }
    };

    //아래코드가 실행 완료된 후 return 함.. 속도가 느릴 수 있다.
    //window.localStorage.setItem('theme', theme); //로컬 스트리지에 테마 저장
    // useEffect(() => {
    //     const sharedTheme = window.localStorage.getItem('theme');
    //     if (sharedTheme) setTheme(sharedTheme);
    // }, []);

    useEffect(() => {
        console.log("render", theme);
    }, [theme]);

    return (
        <div
            style={{ width: 400, height: 300, background: theme === 'light' ? '#F1F1F1' : '#333' }}>
            <button onClick={handleClick}>Toggle Theme</button>

        </div>
    );
}