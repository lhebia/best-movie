import React from 'react'

export default function MovieTile(props) {
    return (
        <div key={props.id}>
            {/* <img src={props.posterPath} alt={props.title} /> */}
            <p>{props.title}</p>
            {/* <p>{props.overview}</p> */}
        </div>
    )
}
