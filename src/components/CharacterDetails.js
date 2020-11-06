import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import axios from 'axios';

const Details = styled.div`
    background-color: #58641D;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2{
        font-size: 2rem;
        color: #D4E4BC;
        margin: 20px;
    }

    p{
        font-size: 1.2rem;
        color: #D4E4BC;
        margin: 2% 0;
    }

    button{
        /* background-color: #D4E4BC;
        color: #002400;
        border: none;
        border-radius: 10px;
        margin: 5px 10px;
        font-size: 1.05rem; */
        
        color: #002400;
        font-size: 1.05rem;
        margin: 5px 10px;
        border: 1px solid lightgray;
        background-color: #D4E4BC;
        padding: 10px;
        border-radius: 4px;
    }

    button:hover{
        background-color: #623B5A;
        color: #EDFFAB;
    }
`;

export default function CharacterDetails({characterId, close}){
    const [details, setDetails] = useState(null);

    let characterLinkWithId = `https://rickandmortyapi.com/api/character/${characterId}`;
    // use effect function
    const EffectFn = () => {
        axios.get(characterLinkWithId)
        .then((res) => {
            let CharList = res.data;
            setDetails(CharList);
        })
        .catch((err) => {
            return err;
        })
    }
    //useEffect()
    useEffect(EffectFn, [characterId])
    
    return (
        <div>
            <Details>
                <h2>Character Details</h2>
                {
                    details &&
                    <div>
                        <img src={details.image} alt=""/>
                        <p>Name: {details.name}</p>
                        <p>Status: {details.status}</p>
                        <p>Species: {details.species}</p>
                        <p style={{display: !details.type && "none"}}>Type: {details.type}</p>
                        <p>Gender: {details.gender}</p>
                    </div>
                }
                <button onClick={close}>Close</button>
            </Details>
            
        </div>
    )
}