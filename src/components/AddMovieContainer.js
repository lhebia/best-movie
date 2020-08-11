import React from 'react';
import styled from '@emotion/styled';

const StyledHeading = styled.h2`
    text-align: center;
    font-size: 5rem;
    text-transform: uppercase;
`;

export default function AddMovieContainer() {
    return (
        <div>
            <StyledHeading>Add Movie Section</StyledHeading>
        </div>
    )
}
