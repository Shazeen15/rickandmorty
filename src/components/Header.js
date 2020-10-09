import React from 'react';
import styled from 'styled-components'
import img from '../images/rickandmorty-back.jpg'

const H1 = styled.h1`
    color: #F9F674;
    font-size: 2rem;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(${img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    @media (max-width: 500px){
        font-size: 1.5rem;
    }
`;


const Header = () => {
    return(
        <div>
        <H1>Rick and Morty Characters</H1>
        </div>
        
    )
}

export default Header;