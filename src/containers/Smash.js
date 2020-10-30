import React from 'react';

import { SmashContainer, SmashTile } from '../styles/smashStyles.js';

export default function Smash({ trendingUrl, setTrendingUrl }) {
    return (
        <SmashContainer>
            <SmashTile>
                <p>Movie One</p>
            </SmashTile>
            <SmashTile> 
                <button onClick={() => setTrendingUrl(trendingUrl)}><p>Smash</p></button>
            </SmashTile>
            <SmashTile>
                <p>Movie Two</p>
            </SmashTile>
        </SmashContainer>
    )
}
