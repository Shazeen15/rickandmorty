// Write your Character component here
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components'
import CharCard from './CharCard'
import Header from './Header'


const Card = styled.section`
    /* display: flex;
    flex-wrap: wrap;
    justify-content: space-around; */
    width: 50%;
    margin: 2% auto;
`;


const Character = (props) => {
    const [characters, setCharacters] = useState([]);

    const EffectFn = () => {
        axios.get('https://rickandmortyapi.com/api/character')
        .then((res) => {
            let CharList = res.data.results;
            console.log(CharList);
            setCharacters(CharList);
        })
        .catch((err) => {
            return err;
        })
    }
    useEffect(EffectFn, [])

    return (
        <div>
            <Header/>
            <Card>
                {characters.map(
                    (char) => {
                        return <CharCard key={char.id} characters={char}/>
                    }
                )}
            </Card>
            
        </div>
    )
}

export default Character;