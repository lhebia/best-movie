import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    grid-gap: 1rem;
`;

export default function MovieContainer({ children }) {
    return (
        <Container>
            {children}
        </Container>
    )
}
