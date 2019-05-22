import React from "react";
import styled from "styled-components/macro";

function Header() {
  const NavBar = styled.div`
    padding: 0 2rem;
    display: flex;
    align-items: center;
    background: #fff;
    border-bottom: 3px solid #ede7f6;
    height: 3.5rem;
    width: 100%;
  `;

  const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: 600;
    color: #651fff;
    cursor: pointer;
    transition: background 0.5s ease;

    &:hover {
      color: #5c1cea;
    }

    @media (max-width: 700px) {
      font-size: 1.25rem;
    }
  `;

  return (
    <>
      <NavBar>
        <Title>Untitled App</Title>
      </NavBar>
    </>
  );
}

export default Header;
