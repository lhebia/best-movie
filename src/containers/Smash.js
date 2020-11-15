import React from 'react';

import { SmashContainer, SmashTile } from '../styles/smashStyles.js';

export default function Smash({ trendingUrl, setTrendingUrl }) {
    return (
        <SmashContainer>
            <SmashTile>
                <p>Movie One</p>
            </SmashTile>
            <SmashTile onClick={() => console.log('Smash')}> 
                <p>Smash</p>
            </SmashTile>
            <SmashTile>
                <p>Movie Two</p>
            </SmashTile>
        </SmashContainer>
    )
}
