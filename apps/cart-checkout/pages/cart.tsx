import React from 'react';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface CartProps {}

const StyledCart = styled.div`
  color: pink;
`;

export const Cart = (props: CartProps) => {
  return (
    <StyledCart>
      <h1>Welcome to cart!</h1>
    </StyledCart>
  );
};

export default Cart;
