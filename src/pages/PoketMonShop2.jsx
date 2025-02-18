import { PoketMonHead } from '../components/PoketMonHead';
import { poketMonList } from '../static/poketMonList';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export function PoketMonShop2() {
    const location = useLocation();
    const [array, setArray] = useState([]);
    const [arrIdNum, setIdNum] = useState([]);
    const [no, setNo] = useState(1);
    const navigate = useNavigate();
    const state = location.state;
    const poketMonItem = state.poketMonItem;
    const searchValue = state.searchValue;
    const typeName = state.typeName; // 처음에 들어온 값

    const handleClick = (item, idNum) => {
        //setArray([...array]);
    }

    const handleAllClick = () => {
        navigate("/PoketMonShop", { state: { typeName: typeName } });
    }

    const fetchData = async (no) => {
        const lUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" + no + ".svg";
        const answer = await fetch(lUrl);
        if (answer != null) {
            array.push(lUrl);
        } else if (answer == null) {
            const sUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" + no + ".png";
            const sanswer = await fetch(sUrl);
            if (sanswer != null) array.push(sUrl);
        }

        const str = no + "";
        switch (str.length) {
            case 1: arrIdNum.push("#" + '00' + no); break;
            case 2: arrIdNum.push("#" + '0' + no); break;
            case 3: arrIdNum.push("#" + no); break;
            default: arrIdNum.push("#" + no); break;
        }
        setNo(no + 1);
    }

    useEffect(() => {
        if (no > 250) return;
        fetchData(no);
        //displayWin(modalOpen);
        //setModalOpen(false);
    }, [no]);  // 넘버가 바뀔 때마다 호출

    if (location.state.searchValue == null || location.state.searchValue == '') {
        return (
            <>
                {
                    <PoketMonHead />
                },
                <div><button onClick={() => handleAllClick()} key={no}>전체보기</button></div><br /><br />
                <div className="pokemons-container" key={no}>
                    {
                        poketMonList.map((list, idx) => {
                            return (list.typeName != location.state.typeName) ? <></> :
                                <div className={list.class1} onClick={() => handleClick(list.idNumber, true)}>
                                    <div>
                                        <span className="id-number">{list.idNumber}</span>
                                        <span className="pokemon-name">{list.pokemonName}</span>
                                        <div className="types">
                                            <div className={list.typeName}>
                                                <img key={idx} src={list.imgSrc} alt={list.alt} style={{ width: 10, height: 10 }} />
                                                <span className="type-name">{list.typeName}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pokeball-bg"></div>
                                    {
                                        array.map((item, index) => {
                                            return (list.idNumber === arrIdNum[index]) ? <img className="pokemon-image" key={index} src={item} alt="pokemon-image" /> : <></>
                                        })
                                    }
                                </div>
                        })
                    }
                </div >
            </>
        );
    } else {
        const poketMonItem = state.poketMonItem;
        console.log(poketMonItem.pokemonName);
        return (
            <>
                {
                    <PoketMonHead />
                },
                <div><button onClick={() => handleAllClick()} key={no}>전체보기</button></div><br /><br />
                <div className="pokemons-container" key={no}>
                    <>
                        <div key={no} className={poketMonItem.class1} onClick={() => handleClick(poketMonItem.idNumber, true)}>
                            <div>
                                <span className="id-number">{poketMonItem.idNumber}</span>
                                <span className="pokemon-name">{poketMonItem.pokemonName}</span>
                                <div className="types">
                                    <div className={poketMonItem.typeName}>
                                        <img key={no} src={poketMonItem.imgSrc} alt={poketMonItem.alt} style={{ width: 10, height: 10 }} />
                                        <span className="type-name">{poketMonItem.typeName}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="pokeball-bg"></div>
                            {
                                array.map((item, index) => {
                                    return (poketMonItem.idNumber === arrIdNum[index]) ? <img className="pokemon-image" key={index} src={item} alt="pokemon-image" /> : <></>
                                })
                            }
                        </div>
                    </>
                </div >
            </>
        );
    }
}
