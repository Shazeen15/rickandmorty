// Write your Character component here
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components'
import CharCard from './CharCard'
import Header from './Header'
import CharacterDetails from './CharacterDetails'

const Character = (props) => {
    const [characters, setCharacters] = useState([]);
    const [currentCharacterId, setCurrentCharacterId] = useState("1");
    const[page, setPage] = useState('1');

    const openDetails = (id) => {
        setCurrentCharacterId(id);
    };

    const closeDetails = () => {
        setCurrentCharacterId(null);
    };

    let characterLink = `https://rickandmortyapi.com/api/character/?page=${page}`;
    console.log(characterLink)
    const EffectFn = () => {
        axios.get(characterLink)
        .then((res) => {
            let CharList = res.data.results;
            setCharacters(CharList);
            console.log(CharList);
        })
        .catch((err) => {
            return err;
        })
    }
    useEffect(EffectFn, [page]);

    const nextPage = () => {
        setPage(Number(page) + 1);
    }
    return (
        <div>
            <Header/>
            <div>
                {characters.map(
                    (char) => {
                        return <CharCard key={char.id} characters={char} action={openDetails}/>
                    }
                )}
                {currentCharacterId && (
                <CharacterDetails characterId={currentCharacterId} close={closeDetails} />
                )}
                <button onClick={nextPage}>Next Page</button>
            </div>
            
        </div>
    )
}

export default Character;