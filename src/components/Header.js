import React from 'react';
import './Header.css';

export default function Header() {
    return (
      <div className="Header flexContainer">
        <div className="flexContainer">
          <span aria-roledescription="image" aria-label="Popcorn Logo">🍿</span>
          <h1>MovieSmash</h1>
        </div>
        <nav>
          <ul className="flexContainer">
            <li>Home</li>
            <li>Leaderboard</li>
            <li>Add Movie</li>
            <li>Trending</li>
          </ul>
        </nav>
      </div>
    );
}
