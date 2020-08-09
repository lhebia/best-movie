import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './../components/Header';
import MovieContainer from './../components/MovieContainer';
import MovieTile from './../components/MovieTile';
import './../App.css';

export default function HomePage() {

    const [movieState, setMovieState] = useState([]); 
    const [movieConfig, setMovieConfig] = useState();
    const [hasError, setErrors] = useState(false);

    useEffect(() => {

        async function fetchData() {
            const res = await fetch("https://api.themoviedb.org/3/trending/movie/day?page=1", {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
                    "Content-Type": "application/json;charset=utf-8",
                },
            });
            res
                .json()
                .then(res => setMovieState(res.results))
                .catch(err => setErrors(err));
        }

        fetchData();

    }, [])

    useEffect(() => {
      async function fetchConfigData() {
        const res = await fetch(
          "https://api.themoviedb.org/3/configuration",
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
              "Content-Type": "application/json;charset=utf-8",
            },
          }
        );
        res
          .json()
          .then((res) => setMovieConfig(res))
          .catch((err) => console.log(err));
      }

      fetchConfigData();
    }, []);

    console.log(movieConfig);

    return (
      <div className="App wrapper">
        <Router>
          <Header />
          <h1>Hello, movie heads!</h1>
          <MovieContainer>
            {movieState.map((movie) => {
              return (
                <MovieTile
                  title={movie.title}
                  id={movie.id}
                //   posterPath={`${movieConfig.images.secure_base_url}${movie.poster_path}`}
                />
              );
            })}
          </MovieContainer>
        </Router>
      </div>
    );
}
