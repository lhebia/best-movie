import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import useApiData from '../hooks/useApiData';

import Header from './../components/Header';
import MovieContainer from './../components/MovieContainer';
import LeaderboardContainer from './../components/LeaderboardContainer';
import AddMovieContainer from './../components/AddMovieContainer';
import MovieTile from './../components/MovieTile';
import Smash from './../containers/Smash';
import './../App.css';

export default function HomePage() {

    const initialUrl = "https://api.themoviedb.org/3/trending/movie/day?page=1";

    const [movieState, setTrendingUrl] = useApiData(initialUrl);
    const [movieConfig, setMovieConfig] = useState();

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
    console.log('Movie-state:', movieState);

    return (
      <div className="App wrapper">
        <Router>
          <Header />
          <Route exact path="/" render={() => {
            return (
              <>
                <Smash trendingUrl={initialUrl} setTrendingUrl={setTrendingUrl} />
                { movieState && 
                  <MovieContainer>
                    {movieState.map((movie) => {
                      return (
                        <MovieTile
                          key={movie.id}
                          title={movie.title}
                          id={movie.id}
                        //   posterPath={`${movieConfig.images.secure_base_url}${movie.poster_path}`}
                        />
                      );
                    })}
                  </MovieContainer>
                }
              </>
            )
          }} />
          <Route path="/leaderboard">
            <LeaderboardContainer />
          </Route>
          <Route path="/add">
            <AddMovieContainer />
          </Route>
        </Router>
      </div>
    );
}
