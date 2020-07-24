import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './../components/Header';
import './../App.css';

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
      <div className="App wrapper">
        <Router>
            <Header />
            <h1>Hello, movie heads!</h1>
        </Router>
      </div>
    );
}
