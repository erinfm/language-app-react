import React from "react";
import styled from "styled-components/macro";

function Header() {
  const NavBar = styled.div`
    padding: 0 2rem;
    display: flex;
    align-items: center;
    background: #fff;
    border-bottom: 3px solid #ede7f6;
    height: 4rem;
    width: 100%;
  `;

  const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: 600;
    color: #651fff;
    cursor: pointer;
  `;

  return (
    <>
      <NavBar>
        <Title>Header</Title>
      </NavBar>
    </>
  );
}

export default Header;
