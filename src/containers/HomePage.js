import React, { useState, useEffect } from 'react'

export default function HomePage() {

    const [movieState, setMovieState] = useState({ movies:[] }); 

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/trending/movie/day?page=1", {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
                "Content-Type": "application/json;charset=utf-8",
            },
        })
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result.results);
                    setMovieState(result.results);
                },

                (error) => {
                    console.log(error);
                }
            )
    }, [])

    return (
        <div>
            <h1>Hello, movie heads!</h1>
        </div>
    )
}
