import React, { useState, useEffect } from 'react'

export default function HomePage() {

    // const [movieState, setMovieState] = useState({ movies:[] }); 

    useEffect( () => {
        try {
            const movieTrendingUrl = `https://api.themoviedb.org/3/trending/movie/day?page=1`;
            const responsePromise = fetch(movieTrendingUrl, {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
                    "Content-Type": "application/json;charset=utf-8",
                },
            });
            const response = responsePromise.json();

            console.log(response);
            console.log('Nothing');

            // setMovieState({
            //     movies: response.results,
            // });
        } catch (e) {
            console.log(e);
        }
    })

    return (
        <div>
            <h1>Hello, movie heads!</h1>
        </div>
    )
}
