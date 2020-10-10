import React from 'react';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface SignupProps {}

const StyledSignup = styled.div`
  color: #03A9F4;
`;

export const Signup = (props: SignupProps) => {
  return (
    <StyledSignup>
      <h1>Welcome to signup!</h1>
    </StyledSignup>
  );
};

export default Signup;
