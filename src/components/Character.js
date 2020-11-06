// Write your Character component here
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components'
import CharCard from './CharCard'
import Header from './Header'
import CharacterDetails from './CharacterDetails'

const BtnContainer = styled.div`
    display: flex;
    justify-content: space-between;

    button{
        background-color: #7B904B;
        color: #D4E4BC;
        border: none;
        border-radius: 10px;
        margin: 5px 10px;
        font-size: 1.05rem;
    }

`;

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

    const previousPage = () => {
        setPage(Number(page) - 1);
    }

    const nextPage = () => {
        setPage(Number(page) + 1);
    }
    return (
        <div>
            <Header/>
            <BtnContainer>
                <button onClick={previousPage}>Previous Page</button>
                <button onClick={nextPage}>Next Page</button>
            </BtnContainer>
            
            <div>
                {characters.map(
                    (char) => {
                        return <CharCard key={char.id} characters={char} action={openDetails}/>
                    }
                )}
                
                {currentCharacterId && (
                <CharacterDetails characterId={currentCharacterId} close={closeDetails} />
                )}
                
            </div>
            
        </div>
    )
}

export default Character;