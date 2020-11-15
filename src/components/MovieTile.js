import React from 'react';
import styled from '@emotion/styled';

const Tile = styled.button`
    border: 1px solid #fff;
    border-radius: 5px;
    padding: 1rem;
`;

export default function MovieTile({ id, title }) {
    return (
        <Tile key={id}>
            {/* <img src={props.posterPath} alt={props.title} /> */}
            <p>{title}</p>
            {/* <p>{props.overview}</p> */}
        </Tile>
    )
}
