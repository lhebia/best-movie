import React, { Children } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
`;

export default function MovieContainer(props) {
    return (
        <Container>
            {props.children}
        </Container>
    )
}
