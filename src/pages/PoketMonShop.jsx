import { PoketMonHead } from '../components/PoketMonHead'
import { poketMonList } from '../static/poketMonList';
import { useState, useRef, useEffect } from 'react';
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export function PoketMonShop() {
    const [modalOpen, setModalOpen] = useState(true);
    const [data, setData] = useState(null);
    const [no, setNo] = useState(0);
    const [array, setArray] = useState([]);
    const [arrIdNum, setIdNum] = useState([]);
    const modalBackground = useRef(0);
    const navigate = useNavigate();

    const searchValue = useRef();

    const handleSearchClick = () => {
        const poketMonItem = poketMonList.find(list => list.pokemonName === searchValue.current.value);

        navigate("/PoketMonShop2", { state: { poketMonItem: poketMonItem, searchValue: searchValue.current.value } });
    }

    const handleClick = (item, idx) => {
        displayWin(item, idx);
    }

    const fetchData = async (no) => {
        const lUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" + no + ".svg";
        const answer = await fetch(lUrl);

        const str = no + "";
        switch (str.length) {
            case 1: arrIdNum.push("#" + '00' + no); break;
            case 2: arrIdNum.push("#" + '0' + no); break;
            case 3: arrIdNum.push("#" + no); break;
            default: arrIdNum.push("#" + no); break;
        }

        if (answer != null) {
            array.push(lUrl);
        } else {
            const sUrl = await fetch("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" + no + ".png");
            array.push(sUrl);
        }

        setNo(no + 1);
    }

    useEffect(() => {
        if (no > 250) return;
        fetchData(no);
    }, [no]);  // 넘버가 바뀔 때마다 호출


    const displayWin = (item, idx) => {

        alert(" 이름 : " + item.pokemonName + "\n" +
            " 번호 : " + item.idNumber + "\n" +
            " 분류 : " + item.typeName + "\n"
        );

    }

    return (
        <>
            {
                <PoketMonHead />
            },
            <div>
                <div> 포켓몬 이름을 입력하세요 : </div>
                <input placeholder="포켓몬이름을 입력하세요." ref={searchValue} type="text" id="search" name="search" style={{ height: 40, fontWeight: 100, fontSize: 20 }} />
                <button onClick={() => handleSearchClick()} key={no}>검색</button>
            </div>
            <br /><br />
            <div className="pokemons-container" key={no}>
                {
                    poketMonList.map((list, idx) => {
                        // < div className="pokemon-card fairy" id="container${no}" ref={modalBackground} onClick={() => handleClick('035', true)}>
                        return (
                            <>
                                <div key={idx} className={list.class1} ref={modalBackground} onClick={() => handleClick(list, idx)}>
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
                                            return (list.idNumber === arrIdNum[index]) ? <img className="pokemon-image" key={index} src={item} alt="pokemon-image" onClick={() => handleClick()} /> : <></>
                                        })
                                    }
                                </div>
                            </>
                        );
                    })
                }
            </div >
        </>
    );
}