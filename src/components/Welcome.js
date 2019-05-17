import React from "react";
import styled from "styled-components/macro";

function Welcome() {
  const WelcomeContainer = styled.div`
    padding: 2rem 2rem;
    background: #8559da;
    border-radius: 6px;
    grid-area: welcome;
    position: relative;
  `;

  const Title = styled.h1`
    font-size: 2.25rem;
    font-weight: 400;
    color: #fff;
  `;

  const Button = styled.button`
    background: #651fff;
    border: 2px solid #fff;
    border-radius: 6px;
    color: #fff;
    cursor: pointer;
    font-size: 1.5rem;
    padding: 1rem 2rem;
    position: absolute;
    bottom: 2rem;
    left: 2rem;
    transition: background 0.5s ease;

    &:hover {
      background: #5c1de5;
    }
  `;

  return (
    <>
      <WelcomeContainer>
        <Title>Welcome, user!</Title>
        <Button>Test your Skills</Button>
      </WelcomeContainer>
    </>
  );
}

export default Welcome;
