import { PoketMonShop2 } from '../pages/PoketMonShop2';
import { poketMonList } from '../static/poketMonList';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../poketMon.css';

export function PoketMonHead() {
    const navigate = useNavigate();
    const [typeName, setTypeName] = useState('normal');

    const handleClick = (tname) => {
        setTypeName(tname);
        navigate("/PoketMonShop2", { state: { typeName: typeName } });
    }

    return (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" type="image/svg+xml" href="/favicon/favicon.png" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.cdnfonts.com/css/pokemon-solid" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&amp;display=swap" rel="stylesheet" />
            <title>포켓몬 도감</title>
            <script type="module" src="../assets/index-769ab863.js"></script>
            <link rel="stylesheet" href="../assets/index-1858a881.css" />

            <div className="wrapper">
                <h1 className="logo-pokemon">포켓몬 도감</h1><br /><br />
            </div>

            <nav className="types-bar">
                <a id="normal" className="normal" onClick={() => handleClick('normal')} >
                    <img src="https://poketdemo-week-two-demo.vercel.app/images/types-icons/normal.svg" alt="normal" />
                </a>
                <a id="fighting" className="fighting" onClick={() => handleClick('fighting')}>
                    <img src="https://poketdemo-week-two-demo.vercel.app/images/types-icons/fighting.svg" alt="fighting" />
                </a>
                <a id="flying" className="flying" onClick={() => handleClick('flying')}>
                    <img src="https://poketdemo-week-two-demo.vercel.app/images/types-icons/flying.svg" alt="flying" /></a>
                <a id="poison" className="poison" onClick={() => handleClick('poison')}>
                    <img src="https://poketdemo-week-two-demo.vercel.app/images/types-icons/poison.svg" alt="poison" /></a>
                <a id="ground" className="ground" onClick={() => handleClick('ground')}>
                    <img src="https://poketdemo-week-two-demo.vercel.app/images/types-icons/ground.svg" alt="ground" /></a>
                <a id="rock" className="rock" onClick={() => handleClick('rock')}>
                    <img src="https://poketdemo-week-two-demo.vercel.app/images/types-icons/rock.svg" alt="rock" /></a>
                <a id="bug" className="bug" onClick={() => handleClick('bug')}>
                    <img src="https://poketdemo-week-two-demo.vercel.app/images/types-icons/bug.svg" alt="bug" />
                </a>
                <a id="ghost" className="ghost" onClick={() => handleClick('ghost')}>
                    <img src="https://poketdemo-week-two-demo.vercel.app/images/types-icons/ghost.svg" alt="ghost" /></a>
                <a id="steal" className="steel" onClick={() => handleClick('steel')}>
                    <img src="https://poketdemo-week-two-demo.vercel.app/images/types-icons/steel.svg" alt="steel" /></a>
                <a id="fire" className="fire" onClick={() => handleClick('stfireeel')}>
                    <img src="https://poketdemo-week-two-demo.vercel.app/images/types-icons/fire.svg" alt="fire" /></a>
                <a id="Water" className="water" onClick={() => handleClick('water')}>
                    <img src="https://poketdemo-week-two-demo.vercel.app/images/types-icons/water.svg" alt="water" /></a>
                <a id="grass" className="grass" onClick={() => handleClick('grass')}>
                    <img src="https://poketdemo-week-two-demo.vercel.app/images/types-icons/grass.svg" alt="grass" /></a>
                <a id="electric" className="electric" onClick={() => handleClick('electric')}>
                    <img src="https://poketdemo-week-two-demo.vercel.app/images/types-icons/electric.svg" alt="electric" /></a>
                <a id="psychic" className="psychic" onClick={() => handleClick('psychic')}>
                    <img src="https://poketdemo-week-two-demo.vercel.app/images/types-icons/psychic.svg" alt="psychic" /></a>
                <a id="ice" className="ice" onClick={() => handleClick('ice')}>
                    <img src="https://poketdemo-week-two-demo.vercel.app/images/types-icons/ice.svg" alt="ice" /></a>
                <a id="dragon" className="dragon" onClick={() => handleClick('dragon')}>
                    <img src="https://poketdemo-week-two-demo.vercel.app/images/types-icons/dragon.svg" alt="dragon" /></a>
                <a id="dark" className="dark" onClick={() => handleClick('dark')}>
                    <img src="https://poketdemo-week-two-demo.vercel.app/images/types-icons/dark.svg" alt="dark" /></a>
                <a id="fairy" className="fairy" onClick={() => handleClick('fairy')}>
                    <img src="https://poketdemo-week-two-demo.vercel.app/images/types-icons/fairy.svg" alt="fairy" /></a>
            </nav>
        </>
    );
}