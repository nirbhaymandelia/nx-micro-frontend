import React from 'react';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface CategoryProps {}

const StyledCategory = styled.div`
  color: red;
`;

export const Category = (props: CategoryProps) => {
  return (
    <StyledCategory>
      <h1>Welcome to Category Page!</h1>
    </StyledCategory>
  );
};

export default Category;
