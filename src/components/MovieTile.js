import React from 'react';
import styled from '@emotion/styled';

const Tile = styled.div`
    border: 1px solid #fff;
    border-radius: 5px;
    padding: 1rem;
`;

export default function MovieTile(props) {
    return (
        <Tile key={props.id}>
            {/* <img src={props.posterPath} alt={props.title} /> */}
            <p>{props.title}</p>
            {/* <p>{props.overview}</p> */}
        </Tile>
    )
}
