import React from 'react';
import styled from 'styled-components';

const Name = styled.div`

display: flex;
justify-content: center;
align-items: center;

p{
    font-size: 1.2rem;
    color: #002400;
    margin: 5px;
    }

button{
    /* background-color: #7B904B;
    color: #D4E4BC;
    border: none;
    border-radius: 10px;
    margin: 5px 10px;
    font-size: 1.05rem; */
    color: #D4E4BC;
    font-size: 1.05rem;
    margin: 5px 10px;
    border: 1px solid lightgray;
    background-color: #7B904B;
    padding: 10px;
    border-radius: 4px; 
}
button:hover{
        background-color: #623B5A;
        color: #EDFFAB;
    }
`;


const CharCard = ({characters, action}) => {

    return (
        <div>
            <Name>
                <p>{characters.name}</p>
                <button onClick={() => action(characters.id)}>See details</button>
            </Name>
            
        </div>
    )
}

export default CharCard;