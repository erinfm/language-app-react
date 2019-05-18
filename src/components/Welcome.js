import React from "react";
import styled from "styled-components/macro";

function Welcome(props) {
  const WelcomeContainer = styled.div`
    padding: 2rem 2rem;
    background: #8559da;
    border-radius: 6px;
    grid-area: welcome;
    position: relative;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);

    @media (max-width: 700px) {
      box-shadow: none;
      border-radius: 0;
      height: 40vh;
    }
  `;

  const Title = styled.h1`
    font-size: 2rem;
    font-weight: 400;
    color: #fff;
  `;

  const Button = styled.button`
    background: #651fff;
    border: 1.5px solid #fff;
    border-radius: 6px;
    color: #fff;
    cursor: pointer;
    font-size: 1.25rem;
    padding: 1rem 1.75rem;
    position: absolute;
    bottom: 2rem;
    left: 2rem;
    transition: background 0.5s ease;

    &:hover {
      background: #5c1cea;
    }
  `;

  return (
    <>
      <WelcomeContainer>
        <Title>Welcome, user!</Title>
        <Button onClick={props.handleClick}>Test your Skills</Button>
      </WelcomeContainer>
    </>
  );
}

export default Welcome;
