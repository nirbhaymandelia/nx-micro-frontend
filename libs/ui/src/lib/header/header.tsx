import React from 'react';
import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface HeaderProps {
  appName: string
}

const StyledHeader = styled.div`
  color: black;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  background-color: #143055;
  padding: 20px;
`;

const StyledLogo = styled.h1`
  display: flex;
  align-items: center;
  color: #fff;
  margin: 0;
`;

const StyledList = styled.ul`
  {
    list-style:none;
    display: flex;
    align-items: center;
    color: #fff;
    margin: 0;
  }

  a {
    padding:15px;
    color: #fff;
  }
`;

export const Header = (props: HeaderProps) => {
  const Logo = props.logo;
  return (
    <StyledHeader>
      <StyledLogo>
        <Logo width="75" height="30" />
        {props.appName}
      </StyledLogo>
      <StyledList>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/c/101">Category</a>
        </li>
        <li>
          <a href="/p/101">Product</a>
        </li>
        <li>
          <a href="/s/iphone">Search</a>
        </li>
        <li>
          <a href="/signin">SignIn</a>
        </li>
        <li>
          <a href="/signup">SignUp</a>
        </li>
        <li>
          <a href="/cart">Cart</a>
        </li>
        <li>
          <a href="/checkout">Checkout</a>
        </li>
      </StyledList>
    </StyledHeader>
  );
};

export default Header;
