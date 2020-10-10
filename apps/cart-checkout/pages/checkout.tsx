import React from 'react';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface CheckoutProps {}

const StyledCheckout = styled.div`
  color: pink;
`;

export const Checkout = (props: CheckoutProps) => {
  return (
    <StyledCheckout>
      <h1>Welcome to checkout!</h1>
    </StyledCheckout>
  );
};

export default Checkout;
