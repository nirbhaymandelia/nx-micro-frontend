import React from 'react';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface SigninProps {}

const StyledSignin = styled.div`
  color: orange;
`;

export const Signin = (props: SigninProps) => {
  return (
    <StyledSignin>
      <h1>Welcome to signin!</h1>
    </StyledSignin>
  );
};

export default Signin;
