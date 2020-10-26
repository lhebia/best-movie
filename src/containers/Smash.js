import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    margin-bottom: 5rem;
`;

const SmashTile = styled.div`
    padding: 1rem;
    border: 1px solid white;
    border-radius: 5px;
`;

export default function Smash({ trendingUrl, setTrendingUrl }) {
    return (
        <Container>
            <SmashTile>
                <p>Movie One</p>
            </SmashTile>
            <SmashTile> 
                <button onClick={() => setTrendingUrl(trendingUrl)}><p>Smash Button</p></button>
            </SmashTile>
            <SmashTile>
                <p>Movie Two</p>
            </SmashTile>
        </Container>
    )
}
