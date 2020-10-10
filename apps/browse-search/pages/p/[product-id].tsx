import React from 'react';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ProductProps {}

const StyledProduct = styled.div`
  color: pink;
`;

export const Product = (props: ProductProps) => {
  return (
    <StyledProduct>
      <h1>Welcome to Product Page!</h1>
    </StyledProduct>
  );
};

export default Product;
