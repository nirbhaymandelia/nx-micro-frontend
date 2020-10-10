import React from 'react';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface SearchTermProps {}

const StyledSearchTerm = styled.div`
  color: blue;
`;

export const SearchTerm = (props: SearchTermProps) => {
  return (
    <StyledSearchTerm>
      <h1>Welcome to Search Page!</h1>
    </StyledSearchTerm>
  );
};

export default SearchTerm;
