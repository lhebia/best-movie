import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
      <div className="Header flexContainer">
        <div className="flexContainer">
          <span role="img" aria-label="Popcorn Logo">🍿</span>
          <h1>MovieSmash</h1>
        </div>
        <nav>
          <ul className="flexContainer">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/leaderboard">
              <li>Leaderboard</li>
            </Link>
            <Link to="/add">
              <li>Add Movie</li>
            </Link>
          </ul>
        </nav>
      </div>
    );
}
