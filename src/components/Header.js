import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 10vmin;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const FlexDiv = styled.div`
  display: flex;
`;

const FlexUl = styled.ul`
  display: flex;
`;

export default function Header() {
    return (
      <HeaderContainer>
        <FlexDiv>
          <span role="img" aria-label="Popcorn Logo">🍿</span>
          <h1>MovieSmash</h1>
        </FlexDiv>
        <nav>
          <FlexUl>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/leaderboard">
              <li>Leaderboard</li>
            </Link>
            <Link to="/add">
              <li>Add Movie</li>
            </Link>
          </FlexUl>
        </nav>
      </HeaderContainer>
    );
}
